import "./task-data.css";

export default function TaskData({ task, onUpdateTask, onEditTask }) {
    return (
        <div className="task-container">
            <div className="task-details">
                <p className="task-description">{task.description}</p>

                <div className="task-info">
                    <span>Date de création : <strong>{task.date_creation}</strong></span>
                    <span>Date d'échéance : <strong>{task.date_echeance}</strong></span>
                    <span>Urgent : <strong>{task.urgent ? "Oui" : "Non"}</strong></span>
                </div>

                <div className="task-categories">
                    <span className="section-title">Catégories :</span>
                    {task.categories.length > 0 ? (
                        task.categories.map(category => (
                            <span key={category.id} className="category-badge" style={{ backgroundColor: category.color }}>
                                {category.title}
                            </span>
                        ))
                    ) : (
                        <span>Aucune catégorie</span>
                    )}
                </div>

                <div className="task-contacts">
                    <span className="section-title">Contacts :</span>
                    {task.contacts.length > 0 ? (
                        task.contacts.map(contact => (
                            <span key={contact.id} className="contact-badge">
                                {contact.name}
                            </span>
                        ))
                    ) : (
                        <span>Aucun contact</span>
                    )}
                </div>

                <div className="task-actions">
                    {!task.done && (
                        <button className="btn complete-task-button" onClick={() => onUpdateTask(task.id)}>
                            Marquer comme fait
                        </button>
                    )}
                    <button className="btn edit-task-button" onClick={() => onEditTask(task)}>
                        Modifier la tâche
                    </button>
                </div>
            </div>
        </div>
    );
}
