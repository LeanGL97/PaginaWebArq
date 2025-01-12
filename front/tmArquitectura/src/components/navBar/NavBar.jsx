import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-black p-4">
            <span>
              <ul className={styles.menuItems}>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Nuestros Servicios</li>
                <li>Contactanos</li>
              </ul>
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-transparent">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
