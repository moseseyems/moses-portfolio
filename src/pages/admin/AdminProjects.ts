import {
    projectService,
} from '../../services/contentServices';

export function AdminProjects(): string {
    const projects =
        projectService.getAll();

    return `
        <section class="admin-page">
            <div class="admin-page__heading">
                <div>
                    <p class="admin-eyebrow">
                        Content
                    </p>

                    <h1>Projects</h1>

                    <p>
                        Create, update and remove projects
                        displayed on the public portfolio.
                    </p>
                </div>

                <button
                    class="admin-primary-button"
                    type="button"
                    data-create-project
                >
                    + New Project
                </button>
            </div>

            <div class="admin-table-card">
                ${
                    projects.length
                        ? `
                            <div class="admin-table-wrapper">
                                <table class="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Project</th>
                                            <th>Category</th>
                                            <th>Year</th>
                                            <th>Featured</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        ${projects
                                            .map(
                                                project => `
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                ${project.title}
                                                            </strong>

                                                            <span>
                                                                ${project.slug}
                                                            </span>
                                                        </td>

                                                        <td>
                                                            ${project.category}
                                                        </td>

                                                        <td>
                                                            ${project.year}
                                                        </td>

                                                        <td>
                                                            ${
                                                                project.featured
                                                                    ? 'Yes'
                                                                    : 'No'
                                                            }
                                                        </td>

                                                        <td>
                                                            <div class="admin-table__actions">
                                                                <button
                                                                    type="button"
                                                                    data-edit-project="${project.id}"
                                                                >
                                                                    Edit
                                                                </button>

                                                                <button
                                                                    class="admin-table__delete"
                                                                    type="button"
                                                                    data-delete-project="${project.id}"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                `
                                            )
                                            .join('')}
                                    </tbody>
                                </table>
                            </div>
                        `
                        : `
                            <div class="admin-empty-state">
                                <h2>No projects yet</h2>

                                <p>
                                    Create your first portfolio project.
                                </p>
                            </div>
                        `
                }
            </div>
        </section>
    `;
}
