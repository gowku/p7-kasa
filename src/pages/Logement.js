import imgLogement from "../asset/BackgroundLogement.jpg";

function Logement() {
  return (
    <>
      <section className="pictures">
        <img src={imgLogement} alt="imgLogement"></img>
      </section>
      <main className="main_logement">
        <div className="info">
          <div className="top">
            <div className="top_left">
              <div className="top_left_where">
                <h2 className="top_left_where_title">Cozy loft on the canal saint martin</h2>
                <p className="top_left_where_location">Paris, Ile de france</p>
              </div>
              <div className="top_tags">
                <div className="top_tags_tag">
                  <p>Cozy</p>
                </div>
                <div className="top_tags_tag">
                  <p>Canal</p>
                </div>
                <div className="top_tags_tag">
                  <p>Paris 10</p>
                </div>
                <div className="top_tags_tag">
                  <p>Louvre</p>
                </div>
                <div className="top_tags_tag">
                  <p>Rivoli</p>
                </div>
              </div>
            </div>
            <div className="top_right">
              <div className="top_host">
                <div className="top_host_name">
                  <p>Alexandre</p>
                  <p>Dumas</p>
                </div>
                <div className="top_host_img">
                  <img alt="?"></img>
                </div>
              </div>
              <div className="top_right_ratings">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom_description">
              <div className="bottom_description_title">
                <p>Description</p>
                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
                </svg>
              </div>
              <div className="bottom_description_texte">
                <p>
                  Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canal Saint Martin, vous serez proche
                  des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui
                  souhaitent se déplacer en voiture.
                </p>
              </div>
            </div>
            <div className="bottom_description">
              <div className="bottom_description_title">
                <p>Equipement</p>
                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
                </svg>
              </div>
              <div className="bottom_description_texte">
                <ul>
                  <li>Climatisation</li>
                  <li>Wi-fi</li>
                  <li>Cuisine</li>
                  <li>Espace de travail</li>
                  <li>Fer a repasser</li>
                  <li>Seche-cheveux</li>
                  <li>Cintres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Logement;
