import { useState } from "react";
import Popup from "reactjs-popup";
import "./buttonfiltre.css";
import ModalFiltre from "./modalfiltre/modalfiltre";

export default function ButtonFiltre({ onFilterChange }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="buttonfiltre">
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Tous")}>Tous</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("En cours")}>En cours</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Terminé")}>Terminé</button>
            <button className="buttonfiltre-button" onClick={() => setIsModalOpen(true)}>
                <i className="fa fa-filter"></i>
            </button>

            {isModalOpen && <ModalFiltre onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
