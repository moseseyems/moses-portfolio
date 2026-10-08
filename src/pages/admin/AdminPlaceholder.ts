interface AdminPlaceholderOptions {
    eyebrow: string;
    title: string;
    description: string;
}

export function AdminPlaceholder(
    options: AdminPlaceholderOptions
): string {
    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        ${options.eyebrow}
                    </p>

                    <h1>
                        ${options.title}
                    </h1>

                    <p>
                        ${options.description}
                    </p>
                </div>
            </div>

            <div class="admin-panel admin-panel--empty">
                <p>
                    This management workspace is ready for
                    the CRUD controls in the next development batch.
                </p>
            </div>
        </section>
    `;
}
