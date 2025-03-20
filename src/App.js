import logo from './logo.svg';
import './App.css';
import Footer from "./footer/footer";
import Header from "./header/header";
import Task from "./task/task";
import Buttonfiltre from "./buttonfiltre/buttonfiltre";
import { useState } from "react";
import todo from './todo.json';

function App() {
    const [filtreby, setFilter] = useState("Tous");
    const [filtreSpec, setFilterSpec] = useState("Alphabetique");
    const [filtreName, setFilterName] = useState("");
    const [taches, setTaches] = useState(todo.taches);

    const categories = todo.categories;
    const relations = todo.relations;

    const addTask = (newTask) => {
        setTaches([...taches, newTask]);
    };

    return (
        <div className="App">
            <Header />
            <Buttonfiltre onFilterChange={setFilter} onSortChange={setFilterSpec} onfilterName={setFilterName} />
            <Task toDo={taches} categories={categories} relations={relations} filtre={filtreby} filtreSpec={filtreSpec} filtreName={filtreName} />
            <footer>
                <Footer onAddTask={addTask} />
            </footer>
        </div>
    );
}

export default App;
