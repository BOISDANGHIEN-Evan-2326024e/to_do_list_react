import React from "react";
import "./modalsauvegarde.css";

export default function ModalSauvegarde({ onChoice }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Voulez-vous charger la sauvegarde existante ?</h2>
                <div className="modal-buttons">
                    <button className="btn btn-primary" onClick={() => onChoice(true)}>Charger la sauvegarde</button>
                    <button className="btn btn-secondary" onClick={() => onChoice(false)}>Repartir de zéro</button>
                </div>
            </div>
        </div>
    );
}
