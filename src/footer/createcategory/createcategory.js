import React, { useState } from "react";

export function CreateCategory({ onClose, onAddCategory }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [couleur, setCouleur] = useState("#000000");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCategory = {
            id: Date.now(),
            title,
            description,
            couleur,
        };

        onAddCategory(newCategory);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h1>Créer une nouvelle catégorie</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre de la catégorie</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label htmlFor="description">Description de la catégorie</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label htmlFor="couleur">Couleur de la catégorie</label>
                    <input
                        type="color"
                        id="couleur"
                        name="couleur"
                        value={couleur}
                        onChange={(e) => setCouleur(e.target.value)}
                        required
                    />

                    <button type="submit">Créer</button>
                </form>
            </div>
        </div>
    );
}
