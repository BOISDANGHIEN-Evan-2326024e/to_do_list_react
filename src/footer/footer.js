import './footer.css';
import { useState } from "react";
import ModalFiltre from "../buttonfiltre/modalfiltre/modalfiltre";
import CreateTask from "./createtask/createtask";
import { CreateCategory } from "./createcategory/createcategory";

export default function Footer({ onAddTask, onAddCategory, categories, onAddRelation }) {
    const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
    const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Etat pour ouvrir/fermer le menu

    const year = new Date().getFullYear();

    // Fonction pour gérer l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour fermer le menu après une action
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {year} To-Do List App. Tous droits réservés.</p>
                <p className="footer-subtext">Designed with ❤️ by Evan</p>
            </div>

            {/* Bouton "+" pour ouvrir le menu */}
            <div className="add-button-container">
                <button className="add-button" onClick={toggleMenu}>
                    +
                </button>

                {/* Menu déroulant */}
                {isMenuOpen && (
                    <div className="add-menu">
                        <button className="menu-item" onClick={() => { setIsModalTaskOpen(true); handleCloseMenu(); }}>
                            Créer une nouvelle tâche
                        </button>
                        <button className="menu-item" onClick={() => { setIsModalCategoryOpen(true); handleCloseMenu(); }}>
                            Créer une nouvelle Catégorie
                        </button>
                    </div>
                )}
            </div>

            {isModalTaskOpen && <CreateTask onClose={() => setIsModalTaskOpen(false)} onAddTask={onAddTask} categories={categories} onAddRelation={onAddRelation} />}
            {isModalCategoryOpen && <CreateCategory onClose={() => setIsModalCategoryOpen(false)} onAddCategory={onAddCategory} />}
        </footer>
    );
}
