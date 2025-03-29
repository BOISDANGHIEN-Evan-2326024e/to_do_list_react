import { useState } from "react";
import "./ModalEditTask.css";

export default function ModalEditTask({ task, onClose, onSave, categories = [] }) {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dateEcheance, setDateEcheance] = useState(task.date_echeance);
    const [urgent, setUrgent] = useState(task.urgent);
    const [selectedCategories, setSelectedCategories] = useState(
        task.categories ? task.categories.map(cat => cat.id) : []
    );


    const handleSave = () => {
        onSave({ ...task, title, description, date_echeance: dateEcheance, urgent, categories: selectedCategories });
        onClose();
    };

    const toggleCategory = (categoryId) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Modifier la tâche</h1>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <form>
                    <label htmlFor="title">Titre :</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="description-textarea"
                    />

                    <label htmlFor="date_echeance">Date d'échéance :</label>
                    <input type="date" id="date_echeance" value={dateEcheance} onChange={(e) => setDateEcheance(e.target.value)} />

                    <label className="urgent-label">
                        <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} />
                        Urgent
                    </label>

                    <label>Catégories :</label>
                    <div className="categories-container">
                        {categories.length > 0 ? (
                            categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    type="button"
                                    className={`category-button ${selectedCategories.includes(cat.id) ? "selected" : ""}`}
                                    onClick={() => toggleCategory(cat.id)}
                                >
                                    {cat.title}
                                </button>
                            ))
                        ) : (
                            <p>Aucune catégorie disponible.</p>
                        )}
                    </div>

                    <div className="modal-buttons">
                        <button className="btn btn-primary" type="button" onClick={handleSave}>Sauvegarder</button>
                        <button className="btn btn-secondary" type="button" onClick={onClose}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
