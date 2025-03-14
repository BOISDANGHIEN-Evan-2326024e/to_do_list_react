import './buttonfiltre.css';

export default function ButtonFiltre({ onFilterChange }) {
    return (
        <div className="buttonfiltre">
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Tous")}>Tous</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("En cours")}>En cours</button>
            <button className="buttonfiltre-button" onClick={() => onFilterChange("Terminé")}>Terminé</button>
        </div>
    );
}
