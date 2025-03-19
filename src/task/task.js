import TaskData from "./task-data/task-data";
import "./task.css";
import { useState } from "react";

export default function Task({ toDo,filtre }) {
    return (
        <div>
            <ul>
                {toDo &&
                    toDo.map((task, index) => {
                        if(filtre === "Tous") {
                            return <TaskItem key={index} task={task} />;
                        }
                        if(task.statut === filtre) {
                            return <TaskItem key={index} task={task} />;
                        }
                    })}
            </ul>
        </div>
    );
}

function TaskItem({ task }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="task">
            <div className="task-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{task.intitule}</h2>
                <p>Statut : {task.statut}</p>
            </div>
            {isOpen && <TaskData task={task} />}
        </div>
    );
}
