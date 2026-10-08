import type { ContactMessage } from '../models/ContactMessage';
import { messageService } from '../services/contentServices';

interface ContactFormFields {
    name: HTMLInputElement;
    email: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLTextAreaElement;
}

interface ContactFormErrors {
    name: HTMLElement;
    email: HTMLElement;
    subject: HTMLElement;
    message: HTMLElement;
}

interface ValidationResult {
    valid: boolean;
    message: string;
}

function createMessageId(): string {
    if (
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
    ) {
        return `message-${crypto.randomUUID()}`;
    }

    return `message-${Date.now()}`;
}

function validateName(value: string): ValidationResult {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return {
            valid: false,
            message: 'Please enter your name.',
        };
    }

    if (trimmedValue.length < 2) {
        return {
            valid: false,
            message: 'Name must contain at least 2 characters.',
        };
    }

    return {
        valid: true,
        message: '',
    };
}

function validateEmail(value: string): ValidationResult {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return {
            valid: false,
            message: 'Please enter your email address.',
        };
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedValue)) {
        return {
            valid: false,
            message: 'Please enter a valid email address.',
        };
    }

    return {
        valid: true,
        message: '',
    };
}

function validateSubject(value: string): ValidationResult {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return {
            valid: false,
            message: 'Please enter a subject.',
        };
    }

    if (trimmedValue.length < 3) {
        return {
            valid: false,
            message: 'Subject must contain at least 3 characters.',
        };
    }

    return {
        valid: true,
        message: '',
    };
}

function validateMessage(value: string): ValidationResult {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return {
            valid: false,
            message: 'Please enter your message.',
        };
    }

    if (trimmedValue.length < 10) {
        return {
            valid: false,
            message: 'Message must contain at least 10 characters.',
        };
    }

    return {
        valid: true,
        message: '',
    };
}

function setFieldState(
    field: HTMLInputElement | HTMLTextAreaElement,
    errorElement: HTMLElement,
    result: ValidationResult
): void {
    field.setAttribute(
        'aria-invalid',
        String(!result.valid)
    );

    field.classList.toggle(
        'contact-form__control--invalid',
        !result.valid
    );

    errorElement.textContent = result.message;
}

export function initializeContactForm(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            '#contact-form'
        );

    if (!form) {
        return;
    }

    const name =
        form.querySelector<HTMLInputElement>(
            '#contact-name'
        );

    const email =
        form.querySelector<HTMLInputElement>(
            '#contact-email'
        );

    const subject =
        form.querySelector<HTMLInputElement>(
            '#contact-subject'
        );

    const message =
        form.querySelector<HTMLTextAreaElement>(
            '#contact-message'
        );

    const nameError =
        form.querySelector<HTMLElement>(
            '#contact-name-error'
        );

    const emailError =
        form.querySelector<HTMLElement>(
            '#contact-email-error'
        );

    const subjectError =
        form.querySelector<HTMLElement>(
            '#contact-subject-error'
        );

    const messageError =
        form.querySelector<HTMLElement>(
            '#contact-message-error'
        );

    const status =
        form.querySelector<HTMLElement>(
            '#contact-form-status'
        );

    const counter =
        form.querySelector<HTMLElement>(
            '#contact-message-counter'
        );

    if (
        !name ||
        !email ||
        !subject ||
        !message ||
        !nameError ||
        !emailError ||
        !subjectError ||
        !messageError ||
        !status ||
        !counter
    ) {
        return;
    }

    const fields: ContactFormFields = {
        name,
        email,
        subject,
        message,
    };

    const errors: ContactFormErrors = {
        name: nameError,
        email: emailError,
        subject: subjectError,
        message: messageError,
    };

    const formStatus: HTMLElement = status;
    const messageCounter: HTMLElement = counter;

    function updateCounter(): void {
        messageCounter.textContent =
            `${fields.message.value.length} / 2000`;
    }

    fields.message.addEventListener(
        'input',
        updateCounter
    );

    fields.name.addEventListener('blur', () => {
        setFieldState(
            fields.name,
            errors.name,
            validateName(fields.name.value)
        );
    });

    fields.email.addEventListener('blur', () => {
        setFieldState(
            fields.email,
            errors.email,
            validateEmail(fields.email.value)
        );
    });

    fields.subject.addEventListener('blur', () => {
        setFieldState(
            fields.subject,
            errors.subject,
            validateSubject(fields.subject.value)
        );
    });

    fields.message.addEventListener('blur', () => {
        setFieldState(
            fields.message,
            errors.message,
            validateMessage(fields.message.value)
        );
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        formStatus.textContent = '';
        formStatus.className =
            'contact-form__status';

        const nameResult =
            validateName(fields.name.value);

        const emailResult =
            validateEmail(fields.email.value);

        const subjectResult =
            validateSubject(fields.subject.value);

        const messageResult =
            validateMessage(fields.message.value);

        setFieldState(
            fields.name,
            errors.name,
            nameResult
        );

        setFieldState(
            fields.email,
            errors.email,
            emailResult
        );

        setFieldState(
            fields.subject,
            errors.subject,
            subjectResult
        );

        setFieldState(
            fields.message,
            errors.message,
            messageResult
        );

        const formIsValid =
            nameResult.valid &&
            emailResult.valid &&
            subjectResult.valid &&
            messageResult.valid;

        if (!formIsValid) {
            formStatus.textContent =
                'Please correct the highlighted fields before sending your message.';

            formStatus.classList.add(
                'contact-form__status--error'
            );

            const firstInvalidField =
                form.querySelector<
                    HTMLInputElement | HTMLTextAreaElement
                >(
                    '[aria-invalid="true"]'
                );

            firstInvalidField?.focus();

            return;
        }

        const contactMessage: ContactMessage = {
            id: createMessageId(),
            name: fields.name.value.trim(),
            email: fields.email.value.trim(),
            subject: fields.subject.value.trim(),
            message: fields.message.value.trim(),
            status: 'unread',
            createdAt: new Date().toISOString(),
        };

        try {
            messageService.create(contactMessage);

            form.reset();

            fields.name.setAttribute(
                'aria-invalid',
                'false'
            );

            fields.email.setAttribute(
                'aria-invalid',
                'false'
            );

            fields.subject.setAttribute(
                'aria-invalid',
                'false'
            );

            fields.message.setAttribute(
                'aria-invalid',
                'false'
            );

            [
                fields.name,
                fields.email,
                fields.subject,
                fields.message,
            ].forEach(field => {
                field.classList.remove(
                    'contact-form__control--invalid'
                );
            });

            Object.values(errors).forEach(
                errorElement => {
                    errorElement.textContent = '';
                }
            );

            updateCounter();

            formStatus.textContent =
                'Thank you. Your message has been sent successfully.';

            formStatus.classList.add(
                'contact-form__status--success'
            );
        } catch {
            formStatus.textContent =
                'Your message could not be saved. Please try again.';

            formStatus.classList.add(
                'contact-form__status--error'
            );
        }
    });

    updateCounter();
}
