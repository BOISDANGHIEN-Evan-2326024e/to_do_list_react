import React, {useState} from 'react';
import './modalfiltre.css';

export default function ModalFiltre({onClose, onFilterChange, onSortChange, onCategoryFilterChange, categories}) {
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    console.log(categories[0].id);
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    };

    const handleCategoryChange = (categoryId) => {
        let updatedCategories;
        if (selectedCategories.includes(categoryId)) {
            updatedCategories = selectedCategories.filter(id => id !== categoryId);
        } else {
            updatedCategories = [...selectedCategories, categoryId];
        }

        setSelectedCategories(updatedCategories);
        onCategoryFilterChange(updatedCategories);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Filtrer les tâches</h2>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                    <div className="button-group">
                        {["Alphabétique", "dateCréation", "DateEcheance"].map((filter) => (
                            <button
                                key={filter}
                                className={`buttonfiltre-button ${selectedFilter === filter ? "active" : ""}`}
                                onClick={() => handleFilterChange(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                    <h3>Filtrer par catégories</h3>
                    <div className="button-group">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-button ${selectedCategories.includes(category.id) ? "selected" : ""}`}
                                onClick={() => handleCategoryChange(category.id)}>
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}




