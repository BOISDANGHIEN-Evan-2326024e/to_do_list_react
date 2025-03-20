import React from "react";
import { useState } from "react";

export function CreateCategory({onClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [couleur, setCouleur] = useState("#000000");



    function handleSubmit() {
        console.log("Créer une nouvelle catégorie");
    }


    return (
        <div className={"modal"}>
            <div className={"modal-content"}>
                <span className="close" onClick={onClose}>&times;</span>
                <h1>Créer une nouvelle tâche</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre de la categorie</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Description de la categorie</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="couleur">Couleur de la categorie</label>
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