import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="main_notFound">
        <h3>404</h3>
        <p>Oups, La page que vous demandez n'existe pas.</p>
        <Link to="/home" className="ici">
          Retourner sur la page d'acceuil
        </Link>
      </main>
    </>
  );
}

export default NotFound;
