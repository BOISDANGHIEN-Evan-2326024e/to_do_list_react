import React, { useState } from 'react';
import './modalfiltre.css';

export default function ModalFiltre({ onClose, onChange }) {
    const [selectedFilter, setSelectedFilter] = useState("");

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        onChange(filter);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Filtrer les tâches</h2>
                <div className="button-group">
                    {["Alphabétique", "dateCréation", "DateEcheance", "catégorie"].map((filter) => (
                        <label key={filter} className={`buttonfiltre-button ${selectedFilter === filter ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="filter"
                                value={filter}
                                checked={selectedFilter === filter}
                                onChange={() => handleFilterChange(filter)}
                            />
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
