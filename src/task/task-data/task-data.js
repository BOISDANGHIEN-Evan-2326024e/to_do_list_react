export default function TaskData({ task, onUpdateTask }) {
    return (
        <div>
            <div className="task-separator">
                <p> {task.description}</p>
                <p>Date de création : {task.date_creation}</p>
                <p>Date d'échéance : {task.date_echeance}</p>
                <p>Urgent : {task.urgent ? "Oui" : "Non"}</p>
                <p>{task.categories.length > 0 ? "Catégories :" : "Aucune catégorie"}</p>
                <ul>
                    {task.categories.map(category => (
                        <li key={category.id}>{category.title}</li>
                    ))}
                </ul>
                <p>{task.contacts.length > 0 ? "Contacts ajoutés :" : "Aucun contact"}</p>
                <ul>
                    {task.contacts.map(contact => (
                        <li key={contact.id}>{contact.name}</li>
                    ))}
                </ul>
                {!task.done && (
                    <button className="complete-task-button" onClick={() => onUpdateTask(task.id)}>
                        Marquer comme fait
                    </button>
                )}
            </div>
        </div>
    );
}
