import TaskData from "./task-data/task-data";
import "./task.css";
import { useState } from "react";

export default function Task({ toDo, categories, relations, filtre, filtreSpec, filtreName, filtreCategory, onUpdateTask, setTaskToEdit }) {
    console.log(categories)
    let tasksWithCategories = toDo.map(task => {
        const taskRelations = relations.filter(rel => rel.tache === task.id);
        const taskCategories = taskRelations.map(rel => {
            return categories.find(cat => cat.id === rel.categorie);
        }).filter(cat => cat !== undefined);
        return { ...task, categories: taskCategories };
    });
    tasksWithCategories = tasksWithCategories.filter(task => {
        const taskDate = new Date(task.date_echeance);
        const currentDate = new Date();
        return taskDate >= currentDate.setDate(currentDate.getDate() - 7);
    });
    if (filtreSpec === "Alphabétique") {
        tasksWithCategories.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (filtreSpec === "DateEcheance") {
        tasksWithCategories.sort((a, b) => a.date_echeance.localeCompare(b.date_echeance));
    }
    if (filtreSpec === "Catégorie") {
        tasksWithCategories.sort((a, b) => (a.categories[0]?.title || "").localeCompare(b.categories[0]?.title || ""));
    }
    if (filtreSpec === "dateCréation") {
        tasksWithCategories.sort((a, b) => a.date_creation.localeCompare(b.date_creation));
    }

    if (filtreName && filtreName.length > 2) {
        tasksWithCategories = tasksWithCategories.filter(task => task.title.includes(filtreName));
    }

    if (filtreCategory.length > 0) {
        tasksWithCategories = tasksWithCategories.filter(task =>
            task.categories.some(cat => filtreCategory.includes(cat.id))
        );
    }

    return (
        <div>
            <ul>
                {tasksWithCategories.map((task, index) => {
                    let taskDone = task.done ? "Terminé" : "En cours";
                    if (filtre === "Tous" || taskDone === filtre) {
                        return <TaskItem key={index} task={task} onUpdateTask={onUpdateTask} onEditTask={setTaskToEdit} />;
                    }
                })}
            </ul>
        </div>
    );
}

function TaskItem({ task, onUpdateTask, onEditTask }) {
    const [isOpen, setIsOpen] = useState(false);

    let taskStatus = task.done ? (
        <span className="status-badge" style={{ color: "green" }}>
            <i className="fa fa-check" aria-hidden="true"></i> Terminé
        </span>
    ) : (
        <span className="status-badge">
            <i className="fa fa-hourglass" aria-hidden="true"></i> En cours
        </span>
    );

    return (
        <div className="task">
            <div className="task-header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="task-title">{task.title}</h2>
                <p className="categorie-badge date">{task.date_echeance}</p>

                <p>
                    {task.categories.length > 0 ? (
                        task.categories.slice(0, 2).map(cat => (
                            <span key={cat.id} className="categorie-badge" style={{ backgroundColor: cat.color }}>
                                {cat.title}
                            </span>
                        ))
                    ) : (
                        <span className="categorie-badge" style={{ visibility: "hidden" }}>---</span>
                    )}
                </p>

                <p className="categorie-badge">{taskStatus}</p>
            </div>
            {isOpen && <TaskData task={task} onUpdateTask={onUpdateTask} onEditTask={onEditTask} />}
        </div>
    );
}
