import logo from './logo.svg';
import './App.css';
import Footer from "./footer/footer";
import Header from "./header/header";
import Task from "./task/task";
import Buttonfiltre from "./buttonfiltre/buttonfiltre";
import {useState} from "react";

function App() {
    const [filtreby, setFilter] = useState("Tous");
    const todoList = [
        {
            "intitule": "Acheter des courses",
            "description": "Acheter du lait, du pain et des œufs",
            "date_Creation": "2025-03-13",
            "date_Echeance": "2025-03-14",
            "statut": "En cours",
            "Urgent": true,
            "listeContact": ["Jean", "Marie"],
            "categorie": "Courses"
        },
        {
            "intitule": "Vendre des courses",
            "description": "Vendre du lait, du pain et des œufs",
            "date_Creation": "2025-03-13",
            "date_Echeance": "2025-03-14",
            "statut": "En cours",
            "Urgent": true,
            "listeContact": ["Jean", "Marie"],
            "categorie": "Courses"
        },
        {
            "intitule": "Finir le projet React",
            "description": "Développer la liste des tâches et finaliser le design",
            "date_Creation": "2025-03-10",
            "date_Echeance": "2025-03-20",
            "statut": "À faire",
            "Urgent": false,
            "listeContact": ["Paul", "Alice"],
            "categorie": "Travail"
        },
        {
            "intitule": "Prendre rendez-vous chez le médecin",
            "description": "Vérifier les disponibilités et appeler pour fixer un RDV",
            "date_Creation": "2025-03-12",
            "date_Echeance": "2025-03-18",
            "statut": "Terminé",
            "Urgent": false,
            "listeContact": ["Dr. Martin"],
            "categorie": "Santé"
        }
    ];

  return (
    <div className="App">
      <Header />
        <Buttonfiltre onFilterChange={setFilter}/>
        <Task toDo={todoList} filtre={filtreby} />
      <Footer />
    </div>

  );
}


export default App;
