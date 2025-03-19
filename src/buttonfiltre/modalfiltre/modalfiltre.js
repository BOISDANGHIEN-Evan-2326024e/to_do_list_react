import React from 'react';
import './modalfiltre.css';

export default function ModalFiltre({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Filtrer les tâches</h2>
                <p>Ajoute ici tes options de filtrage...</p>
            </div>
        </div>
    );
}
