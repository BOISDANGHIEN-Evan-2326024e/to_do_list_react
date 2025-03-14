export default function TaskData(todo) {
    return(
        <div>
            <div className="task-separator">
                <p>{todo.task.description}</p>
                <p>Date de création : {todo.task.date_Creation}</p>
                <p>Date d'échéance : {todo.task.date_Echeance}</p>
                <p>Urgent : {todo.task.Urgent ? "Oui" : "Non"}</p>
                <p>Liste de contacts : {todo.task.listeContact.join(", ")}</p>
            </div>
        </div>
    )
}