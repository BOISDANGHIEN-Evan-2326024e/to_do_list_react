import './footer.css';
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {year} To-Do List App. Tous droits réservés.</p>
                <p className="footer-subtext">Designed with ❤️ by Evan</p>
            </div>
        </footer>
    );
}