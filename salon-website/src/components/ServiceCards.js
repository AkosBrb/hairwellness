import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import screenObserver from "../utils/observer";

function ServiceCards() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => screenObserver(setIsVisible, elementRef), []);

  return (
    <div className={`service--cards--container card-fade-in-1 ${isVisible ? "card-visible-1" : ""}`} ref={elementRef}>
      <div className="service--card">
        <img src="" alt="service img" />
        <div className="service--card--text">
          <h3>Hajszerkezet újjáépítés</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <NavLink to={"/szolgaltatasok"}>Tovább a szolgáltatásokra</NavLink>
        </div>
      </div>
      <div className="service--card">
        <img src="" alt="service img" />
        <div className="service--card--text">
          <h3>Oxigén terápia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <NavLink to={"/szolgaltatasok"}>Tovább a szolgáltatásokra</NavLink>
        </div>
      </div>
      <div className="service--card">
        <img src="" alt="service img" />
        <div className="service--card--text">
          <h3>Hajvágás</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <NavLink to={"/szolgaltatasok"}>Tovább a szolgáltatásokra</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ServiceCards;