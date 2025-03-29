import React, { useState } from "react";
import "./modalsauvegarde.css";

export default function ModalSauvegarde({ onChoice }) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleResetClick = () => {
        setShowConfirmation(true);
    };

    const confirmReset = (confirm) => {
        if (confirm) {
            onChoice(false);
        }
        setShowConfirmation(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Voulez-vous charger la sauvegarde existante ?</h2>
                <div className="modal-buttons">
                    <button className="btn btn-primary" onClick={() => onChoice(true)}>
                        Charger la sauvegarde
                    </button>
                    <button className="btn btn-secondary" onClick={handleResetClick}>
                        Repartir de zéro
                    </button>
                </div>
                {showConfirmation && (
                    <div className="confirmation-modal">
                        <p>Êtes-vous sûr de vouloir recommencer à zéro ? Cette action est irréversible.</p>
                        <button className="btn btn-danger" onClick={() => confirmReset(true)}>
                            Oui, recommencer
                        </button>
                        <button className="btn btn-secondary" onClick={() => confirmReset(false)}>
                            Annuler
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
