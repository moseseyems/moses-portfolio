export function createContactForm(): string {
    return `
        <form
            class="contact-form"
            id="contact-form"
            novalidate
        >
            <div
                class="contact-form__status"
                id="contact-form-status"
                role="status"
                aria-live="polite"
            ></div>

            <div class="contact-form__row">
                <div class="contact-form__field">
                    <label for="contact-name">
                        Name
                        <span aria-hidden="true">*</span>
                    </label>

                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                        maxlength="80"
                        aria-describedby="contact-name-error"
                    >

                    <span
                        class="contact-form__error"
                        id="contact-name-error"
                    ></span>
                </div>

                <div class="contact-form__field">
                    <label for="contact-email">
                        Email
                        <span aria-hidden="true">*</span>
                    </label>

                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        maxlength="120"
                        aria-describedby="contact-email-error"
                    >

                    <span
                        class="contact-form__error"
                        id="contact-email-error"
                    ></span>
                </div>
            </div>

            <div class="contact-form__field">
                <label for="contact-subject">
                    Subject
                    <span aria-hidden="true">*</span>
                </label>

                <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    maxlength="120"
                    aria-describedby="contact-subject-error"
                >

                <span
                    class="contact-form__error"
                    id="contact-subject-error"
                ></span>
            </div>

            <div class="contact-form__field">
                <label for="contact-message">
                    Message
                    <span aria-hidden="true">*</span>
                </label>

                <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    required
                    minlength="10"
                    maxlength="2000"
                    aria-describedby="contact-message-error"
                ></textarea>

                <div class="contact-form__message-meta">
                    <span
                        class="contact-form__error"
                        id="contact-message-error"
                    ></span>

                    <span
                        class="contact-form__counter"
                        id="contact-message-counter"
                    >
                        0 / 2000
                    </span>
                </div>
            </div>

            <button
                class="contact-form__submit"
                type="submit"
            >
                Send Message
                <span aria-hidden="true">→</span>
            </button>
        </form>
    `;
}
