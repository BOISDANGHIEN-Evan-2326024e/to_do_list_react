import { useState, useEffect } from "react";
import './App.css';
import Footer from "./footer/footer";
import Header from "./header/header";
import Task from "./task/task";
import Buttonfiltre from "./buttonfiltre/buttonfiltre";
import todo from './todo.json';
import ModalSauvegarde from "./modalsauvegarde/modalsauvegarde";
import ModalEditTask from "./task/task-data/modal-edit-task/ModalEditTask";

function App() {
    const [filtreby, setFilter] = useState("Tous");
    const [filtreSpec, setFilterSpec] = useState("DateEcheance");
    const [filtreName, setFilterName] = useState("");
    const [filtreCategory, setFilterCategory] = useState("");
    const [taches, setTaches] = useState([]);
    const [categories, setCategories] = useState([]);
    const [relations, setRelations] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const [taskToEdit, setTaskToEdit] = useState(null);


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

    const addRelation = (newRelation) => {
        setRelations(prevRelations => [...prevRelations, ...newRelation]);
    };

    const onCategoryFilterChange = (newFilter) => {
        setFilterCategory(newFilter);
    };

    const updateTask = (updatedTask) => {
        setTaches((prevTaches) =>
            prevTaches.map(task => task.id === updatedTask.id ? updatedTask : task)
        );

        setRelations((prevRelations) => {
            const filteredRelations = prevRelations.filter(rel => rel.tache !== updatedTask.id);

            const newRelations = updatedTask.categories.map(catId => ({
                tache: updatedTask.id,
                categorie: catId
            }));

            return [...filteredRelations, ...newRelations];
        });
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

            {taches.length > 0 && (
                <Buttonfiltre
                    onFilterChange={setFilter}
                    onSortChange={setFilterSpec}
                    onfilterName={setFilterName}
                    onCategoryFilterChange={onCategoryFilterChange}
                    categories={categories}
                />
            )}

            <Task
                toDo={taches}
                categories={categories}
                relations={relations}
                filtre={filtreby}
                filtreSpec={filtreSpec}
                filtreName={filtreName}
                filtreCategory={filtreCategory}
                onUpdateTask={updateTaskStatus}
                setTaskToEdit={setTaskToEdit}
            />

            <footer>
                <Footer
                    onAddTask={addTask}
                    onAddCategory={addCategory}
                    categories={categories}
                    onAddRelation={addRelation}
                />
            </footer>
            {taskToEdit && (
                <ModalEditTask
                    task={taskToEdit}
                    onClose={() => setTaskToEdit(null)}
                    onSave={updateTask}
                    categories={categories}
                />
            )}
        </div>
    );
}

export default App;
