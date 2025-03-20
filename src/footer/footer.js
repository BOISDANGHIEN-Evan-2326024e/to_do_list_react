import './footer.css';
import { useState } from "react";
import ModalFiltre from "../buttonfiltre/modalfiltre/modalfiltre";
import CreateTask from "./createtask/createtask";
import {CreateCategory} from "./createcategory/createcategory";

export default function Footer({ onAddTask }) { // Recevoir onAddTask en prop
    const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
    const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {year} To-Do List App. Tous droits réservés.</p>
                <p className="footer-subtext">Designed with ❤️ by Evan</p>
            </div>
            <div className={"button-group"}>
                <button className="footer-button" onClick={() => setIsModalTaskOpen(true)}>Créer une nouvelle tâche</button>
                <button className={"footer-button"}  onClick={() => setIsModalCategoryOpen(true)}>Créer une nouvelle Catégorie</button>
            </div>

            {isModalTaskOpen && <CreateTask onClose={() => setIsModalTaskOpen(false)} onAddTask={onAddTask}/>}
            {isModalCategoryOpen && <CreateCategory onClose={() => setIsModalCategoryOpen(false)} onChange={() => {}}/>}

        </footer>
    );
}
