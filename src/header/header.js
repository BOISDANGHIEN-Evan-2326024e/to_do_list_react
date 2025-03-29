import header from './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                </div>
                <h1 className="header-title">To-Do List</h1>
            </div>
        </header>
    );
}
