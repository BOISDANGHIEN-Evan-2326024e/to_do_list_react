import TaskData from "./task-data/task-data";
import "./task.css";
import { useState } from "react";

export default function Task({ toDo, categories, relations, filtre, filtreSpec, filtreName }) {
    // Associer chaque tâche à sa catégorie via relations
    let tasksWithCategories = toDo.map(task => {
        const relation = relations.find(rel => rel.tache === task.id);
        const category = relation ? categories.find(cat => cat.id === relation.categorie) : null;
        return { ...task, category }; // Ajoute la catégorie à la tâche
    });

    // Tri et filtrage des tâches
    if(filtreSpec === "Alphabétique") {
        tasksWithCategories.sort((a, b) => a.title.localeCompare(b.title));
    }
    if(filtreSpec === "DateEcheance") {
        tasksWithCategories.sort((a, b) => a.date_echeance.localeCompare(b.date_echeance));
    }
    if(filtreSpec === "Catégorie") {
        tasksWithCategories.sort((a, b) => (a.category?.title || "").localeCompare(b.category?.title || ""));
    }
    if(filtreSpec === "dateCréation") {
        tasksWithCategories.sort((a, b) => a.date_creation.localeCompare(b.date_creation));
    }
    if(filtreName && filtreName.length > 2) {
        tasksWithCategories = tasksWithCategories.filter(task => task.title.includes(filtreName));
    }

    return (
        <div>
            <ul>
                {tasksWithCategories.map((task, index) => {
                    let taskDone = task.done ? "Terminé" : "En cours";
                    if (filtre === "Tous" || taskDone === filtre) {
                        return <TaskItem key={index} task={task} />;
                    }
                })}
            </ul>
        </div>
    );
}


function TaskItem({ task }) {
    const [isOpen, setIsOpen] = useState(false);

    let taskStatus = task.done ?
        <span className="status-badge" style={{ color: "green" }}>
            <i className="fa fa-check" aria-hidden="true"></i> Terminé
        </span>
        :
        <span className="status-badge">
            <i className="fa fa-hourglass" aria-hidden="true"></i> En cours
        </span>;

    return (
        <div className="task">
            <div className="task-header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="task-title">{task.title}</h2> {/* Ajoutez la classe task-title ici */}
                <p className="categorie-badge date">{task.date_echeance}</p>
                {task.category ? (
                    <p>
                        <span className="categorie-badge" style={{ backgroundColor: task.category.color }}>
                            {task.category.title}
                        </span>
                    </p>
                ) : (
                    <p className="categorie-badge" style={{ visibility: "hidden" }}>---</p>
                )}
                <p className="categorie-badge">{taskStatus}</p>
            </div>
            {isOpen && <TaskData task={task} />}
        </div>
    );
}