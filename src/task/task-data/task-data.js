export default function TaskData(todo) {
    return(
        <div>
            <div className="task-separator">
                <p>{todo.task.description}</p>
                <p>Date de création : {todo.task.date_creation}</p>
                <p>Date d'échéance : {todo.task.date_echeance}</p>
                <p>Urgent : {todo.task.urgent ? "Oui" : "Non"}</p>
                <p>Liste de contacts :   {todo.task.contacts &&
                    todo.task.contacts.map((taskContact, index) => {
                        return <p key={index}>{taskContact.name}</p>;
                    })}</p>
            </div>
        </div>
    )
}