import husky_default from './assets/husky-default.png';
import egg_closed from './assets/egg-closed.png'
import './styles/Tamagotchi.css';

function Tamagotchi() {
  const petName = "Ei";
  var petStatus = "noch nicht geschlüpft";
  var timeToHatch = "7 Stunden, 0 Minuten, 0 Sekunden";

  return (
    <body className="App">
      <header>
        <h1 class="pet-name">{petName}</h1>
        <img src={egg_closed} alt="Pet" className="pet pet-border"></img>
        <p class="pet-status">
          Dein Tamagotchi ist {petStatus}
        </p>
        <p>
          Tage übrig bis zum Schlüpfen: {timeToHatch}
        </p>
        <div class="container">
          <button class="button">Lichtschalter</button>
          <button class="button">Temperatur erhöhen</button>
          <button class="button">Temperatur senken</button>
          <button class="button">Füttern</button>
          <button class="button">Sauber machen</button>
          <button class="button">Spielen</button>
        </div>
      </header>
    </body>
  );
}

export default Tamagotchi;
