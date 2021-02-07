
import './navBar.scss'

const NavBarComponent = () => {
  return (
    <>
      <ul className="com-navbar">
        <li className="item">
          <a href="/"> Inicio </a>
        </li>
        <li className="item">
          <a href="/"> Servicios </a>
        </li>
        <li className="item">
          <a href="/"> Productos </a>
        </li>
        <li className="item">
          <a href="/"> Promociones </a>
        </li>
        <li className="item">
          <a href="/"> Contacto </a>
        </li>

      </ul>

    </>
  );
}

export default NavBarComponent;
