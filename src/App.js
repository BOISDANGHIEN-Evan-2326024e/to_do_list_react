import { useState, useEffect } from "react";
import './App.css';
import Footer from "./footer/footer";
import Header from "./header/header";
import Task from "./task/task";
import Buttonfiltre from "./buttonfiltre/buttonfiltre";
import todo from './todo.json';
import ModalSauvegarde from "./modalsauvegarde/modalsauvegarde";

function App() {
    const [filtreby, setFilter] = useState("Tous");
    const [filtreSpec, setFilterSpec] = useState("DateEcheance");
    const [filtreName, setFilterName] = useState("");
    const [filtreCategory, setFilterCategory] = useState("");
    const [taches, setTaches] = useState([]);
    const [categories, setCategories] = useState([]);
    const [relations, setRelations] = useState([]);
    const [showModal, setShowModal] = useState(true);

    const handleModalChoice = (useExistingData) => {
        if (useExistingData) {
            setTaches(todo.taches);
            setCategories(todo.categories);
            setRelations(todo.relations);
        } else {
            setTaches([]);
            setCategories([]);
            setRelations([]);
        }
        setShowModal(false);
    };

    const addTask = (newTask) => {
        setTaches([...taches, newTask]);
    };

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    // Mettre à jour les relations en une seule fois
    const addRelation = (newRelation) => {
        setRelations(prevRelations => [...prevRelations, ...newRelation]);
    };

    const onCategoryFilterChange = (newFilter) => {
        setFilterCategory(newFilter);
    };

    function updateTaskStatus(id) {
        setTaches(prevTaches =>
            prevTaches.map(task =>
                task.id === id ? { ...task, done: true } : task
            )
        );
    }

    return (
        <div className="App">
            {showModal && <ModalSauvegarde onChoice={handleModalChoice} />} {/* Affichage de la modale */}

            <Header />
            <Buttonfiltre
                onFilterChange={setFilter}
                onSortChange={setFilterSpec}
                onfilterName={setFilterName}
                onCategoryFilterChange={onCategoryFilterChange}
                categories={categories}
            />
            <Task
                toDo={taches}
                categories={categories}
                relations={relations}
                filtre={filtreby}
                filtreSpec={filtreSpec}
                filtreName={filtreName}
                filtreCategory={filtreCategory}
                onUpdateTask={updateTaskStatus}
            />
            <footer>
                <Footer
                    onAddTask={addTask}
                    onAddCategory={addCategory}
                    categories={categories}
                    onAddRelation={addRelation}
                />
            </footer>
        </div>
    );
}

export default App;
