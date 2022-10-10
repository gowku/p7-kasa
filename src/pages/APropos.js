import React from "react";
import imgAPropos from "../asset/backgroundAPropos.jpg";
import Collapse from "../components/Collapse";

function APropos() {
  const description1 = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
 sont régulièrement vérifiées par nos équipes.`;
  const description2 = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
  entraînera une exclusion de notre plateforme.`;
  const description3 = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la
 moindre question.`;
  const description4 = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de
  sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
  les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`;

  return (
    <>
      <div className="background_img">
        <img src={imgAPropos} alt="imgAPropos"></img>
      </div>
      <main className="main_APropos">
        {<Collapse aProposTitle={"Fiabilité"} aProposDescription={description1} />}
        {<Collapse aProposTitle={"Respect"} aProposDescription={description2} />}
        {<Collapse aProposTitle={"Service"} aProposDescription={description3} />}
        {<Collapse aProposTitle={"Sécurité"} aProposDescription={description4} />}
      </main>
    </>
  );
}

export default APropos;
