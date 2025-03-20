import React, { useState } from "react";
import './createtask.css';

export default function CreateTask({ onClose, onAddTask }) {
    const [description, setDescription] = useState("");
    const [dateCreation, setDateCreation] = useState("");
    const [dateEcheance, setDateEcheance] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [contacts, setContacts] = useState([]); // Stocke les contacts sous forme d'objets
    const [newContact, setNewContact] = useState(""); // Pour gérer le nouvel contact
    const [title, setTitle] = useState("");

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
            contacts // Contacts sont déjà structurés correctement
        };

        onAddTask(newTask);
        onClose();
    };

    // Ajouter un contact à la liste, chaque contact est un objet avec une propriété 'name'
    const handleAddContact = () => {
        if (newContact.trim()) {
            const contact = { name: newContact.trim() };
            setContacts([...contacts, contact]);
            setNewContact(""); // Réinitialiser l'entrée
        }
    };

    // Supprimer un contact de la liste
    const handleRemoveContact = (contactToRemove) => {
        setContacts(contacts.filter(contact => contact.name !== contactToRemove.name));
    };

    return (
        <div className={"modal"}>
            <div className={"modal-content"}>
                <span className="close" onClick={onClose}>&times;</span>
                <h1>Créer une nouvelle tâche</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre de la tâche</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Description de la tâche</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="date_creation">Date de création</label>
                    <input
                        type="date"
                        id="date_creation"
                        name="date_creation"
                        value={dateCreation}
                        onChange={(e) => setDateCreation(e.target.value)}
                        required
                    />
                    <label htmlFor="date_echeance">Date d'échéance</label>
                    <input
                        type="date"
                        id="date_echeance"
                        name="date_echeance"
                        value={dateEcheance}
                        onChange={(e) => setDateEcheance(e.target.value)}
                        required
                    />
                    <label htmlFor="urgent">Urgent</label>
                    <input
                        type="checkbox"
                        id="urgent"
                        name="urgent"
                        checked={urgent}
                        onChange={(e) => setUrgent(e.target.checked)}
                    />
                    <label htmlFor="contacts">Ajouter un contact</label>
                    <div className="contacts-input">
                        <input
                            type="text"
                            id="newContact"
                            name="newContact"
                            value={newContact}
                            onChange={(e) => setNewContact(e.target.value)}
                            placeholder="Nom du contact"
                        />
                        <button type="button" onClick={handleAddContact}>Ajouter</button>
                    </div>
                    {contacts.length > 0 && (
                        <div className="contacts-list">
                            <p>Contacts ajoutés :</p>
                            <ul>
                                {contacts.map((contact, index) => (
                                    <li key={index}>
                                        {contact.name}
                                        <span
                                            className="remove-contact"
                                            onClick={() => handleRemoveContact(contact)}
                                        >
                                            ❌
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button type="submit">Créer la tâche</button>
                </form>
            </div>
        </div>
    );
}
