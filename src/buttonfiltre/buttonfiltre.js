import { useState } from "react";
import "./buttonfiltre.css";
import ModalFiltre from "./modalfiltre/modalfiltre";

export default function ButtonFiltre({ onFilterChange, onSortChange, onfilterName }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [filterName, setFilterName] = useState("");
    onfilterName(filterName);
    const handleSortChange = (newFilter) => {
        setSelectedFilter(newFilter);
        onSortChange(newFilter);
        setIsModalOpen(false);
    };

    return (
        <div className="buttonfiltre">
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Tous")}>Tous</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("En cours")}>En cours</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Terminé")}>Terminé</button>
            <input type="text" placeholder="Rechercher une tâche" onChange={(e) => setFilterName(e.target.value)} />
            <button className="buttonfiltre-button" onClick={() => setIsModalOpen(true)}>
                <i className="fa fa-filter"> {selectedFilter}</i>
            </button>

            {isModalOpen && <ModalFiltre onClose={() => setIsModalOpen(false)} onChange={handleSortChange} />}
        </div>
    );
}
