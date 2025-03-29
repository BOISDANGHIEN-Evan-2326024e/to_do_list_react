import React, { useState } from "react";
import './createtask.css';

export default function CreateTask({ onClose, onAddTask, categories, onAddRelation }) {
    const [description, setDescription] = useState("");
    const [dateCreation, setDateCreation] = useState("");
    const [dateEcheance, setDateEcheance] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState("");
    const [title, setTitle] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryToggle = (categoryId) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title,
            description,
            date_creation: dateCreation,
            date_echeance: dateEcheance,
            done: false,
            urgent,
            contacts,
        };

        const relations = selectedCategories.map(categorie => ({
            tache: newTask.id,
            categorie,
        }));

        onAddRelation(relations);
        onAddTask(newTask);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Créer une nouvelle tâche</h1>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre de la tâche</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label htmlFor="date_creation">Date de création</label>
                    <input
                        type="date"
                        id="date_creation"
                        value={dateCreation}
                        onChange={(e) => setDateCreation(e.target.value)}
                        required
                    />

                    <label htmlFor="date_echeance">Date d'échéance</label>
                    <input
                        type="date"
                        id="date_echeance"
                        value={dateEcheance}
                        onChange={(e) => setDateEcheance(e.target.value)}
                        required
                    />

                    <label htmlFor="urgent">Urgent</label>
                    <input
                        type="checkbox"
                        id="urgent"
                        checked={urgent}
                        onChange={(e) => setUrgent(e.target.checked)}
                    />

                    <label htmlFor="contacts">Contacts</label>
                    <input
                        type="text"
                        id="contacts"
                        value={newContact}
                        onChange={(e) => setNewContact(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setContacts(prev => [...prev, { id: Date.now(), name: newContact }]);
                            setNewContact("");
                        }}
                    >
                        Ajouter
                    </button>

                    <div className="contacts-container">
                        {contacts.map(contact => (
                            <div key={contact.id} className="contact-bubble">
                                {contact.name}
                            </div>
                        ))}
                    </div>

                    <label>Catégories</label>
                    <div className="categories-container">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                type="button"
                                className={`category-button ${selectedCategories.includes(cat.id) ? "selected" : ""}`}
                                onClick={() => handleCategoryToggle(cat.id)}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                    <button type="submit">Créer la tâche</button>
                </form>
            </div>
        </div>
    );
}
