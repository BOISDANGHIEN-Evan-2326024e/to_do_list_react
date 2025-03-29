import React, { useState } from "react";

export function CreateCategory({ onClose, onAddCategory }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [color, setCouleur] = useState("#000000");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCategory = {
            id: Date.now(),
            title,
            description,
            color,
        };

        onAddCategory(newCategory);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Créer une nouvelle catégorie</h1>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
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
                        style={{height : "50px", width: "220px"}}
                        value={color}
                        onChange={(e) => setCouleur(e.target.value)}
                        required
                    />

                    <button type="submit">Créer</button>
                </form>
            </div>
        </div>
    );
}
