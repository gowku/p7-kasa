import img from "./asset/acceuilimg.jpg";

function Home() {
  return (
    <>
      <header>
        <div>
          <svg width="211" height="68" viewBox="0 0 211 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.0745 34.6485L8.84014 46.1362V62.2561H0V0H8.84014V34.8338L42.359 0H52.4883L26.1521 27.9782L54.33 62.2561H44.0165L20.0745 34.6485Z"
              fill="#FF6060"
            />
            <path
              d="M118.789 57.2534L122.289 50.5831C126.34 53.3624 132.602 55.4005 138.68 55.4005C146.599 55.4005 149.73 52.9918 149.73 48.9155C149.73 38.3542 120.078 47.4332 120.078 28.7193C120.078 20.1962 127.629 14.6376 139.6 14.6376C145.678 14.6376 152.676 16.3052 156.728 18.8992L153.045 25.5695C148.809 22.7902 144.205 21.8638 139.6 21.8638C132.234 21.8638 128.55 24.6431 128.55 28.3488C128.55 39.4659 158.202 30.3869 158.202 48.7302C158.202 57.2534 150.466 62.6267 137.943 62.6267C130.392 62.812 122.657 60.4033 118.789 57.2534Z"
              fill="#FF6060"
            />
            <path
              d="M210.322 33.7221V62.2561H202.218V55.9564C199.456 60.218 194.115 62.6267 186.748 62.6267C176.066 62.6267 169.436 56.8828 169.436 48.7302C169.436 41.1335 174.224 35.0191 188.221 35.0191H201.666V33.3515C201.666 26.1253 197.43 22.049 189.142 22.049C183.617 22.049 177.908 24.0872 174.224 27.0518L170.725 20.5668C175.514 16.6758 182.512 14.4523 190.063 14.4523C203.139 14.6376 210.322 20.9373 210.322 33.7221ZM201.85 47.8038V41.1335H188.774C180.302 41.1335 177.908 44.4687 177.908 48.3597C177.908 52.9918 181.775 55.9564 188.221 55.9564C194.667 56.1417 199.824 53.3624 201.85 47.8038Z"
              fill="#FF6060"
            />
            <path d="M91.5323 49.842V62.4414L96.8732 59.2916V46.6921L91.5323 49.842Z" fill="#FF6060" />
            <path
              d="M106.266 34.4632L84.3497 21.6785L72.1945 14.6376L60.2234 35.5749L60.4076 55.2153L82.1396 68L84.3497 66.703V48.1744L94.1106 30.9428L104.056 36.6866V55.2153L106.266 53.9183V34.4632Z"
              fill="#FF6060"
            />
          </svg>
        </div>
        <nav>
          <a href="#">Acceuil</a>
          <a href="#">A propos</a>
        </nav>
      </header>
      <section class="imgAcceuil">
        <img src={img} alt="img"></img>
        <div class="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <main>
        <ul class="location-container">
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
          <li class="location">
            <img src="" alt="" />
            <p class="location-titre">titre de la location</p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Home;
