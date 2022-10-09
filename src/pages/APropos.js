import React from "react";
import imgAPropos from "../asset/backgroundAPropos.jpg";

function APropos() {
  return (
    <>
      <div className="background_img">
        <img src={imgAPropos} alt="imgAPropos"></img>
      </div>
      <main className="main_APropos">
        <div className="bottom_description">
          <div className="bottom_description_title">
            <p>Fiabilité</p>
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
            </svg>
          </div>
          <div className="bottom_description_texte">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
              sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="bottom_description">
          <div className="bottom_description_title">
            <p>Respect</p>
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
            </svg>
          </div>
          <div className="bottom_description_texte">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="bottom_description">
          <div className="bottom_description_title">
            <p>Service</p>
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
            </svg>
          </div>
          <div className="bottom_description_texte">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la
              moindre question.
            </p>
          </div>
        </div>
        <div className="bottom_description">
          <div className="bottom_description_title">
            <p>Sécurité</p>
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
            </svg>
          </div>
          <div className="bottom_description_texte">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
              les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default APropos;
