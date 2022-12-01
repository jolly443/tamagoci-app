import { 
  useEffect,
  useState
 } from 'react'
import husky_default from './assets/husky-default.png';
import egg_closed from './assets/egg-closed.png'
import './styles/Tamagotchi.css';


function Tamagotchi() {
  // Timer
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  // Pet picture
  const [petPic, setPetPic] = useState(egg_closed);
  useEffect(() => {
    if(counter < 58) {
      setPetPic(husky_default)
    }
  })
  



  const petName = "Ei";
  var petStatus = "noch nicht geschlüpft";
  var timeToHatch = "7 Stunden, 0 Minuten, 0 Sekunden";

  return (
    <div className="App">
      <header>
        <h1 className="pet-name">{petName}</h1>
        <img src={petPic} alt="Pet" className="pet pet-border"></img>
        <p className="pet-status">
          Dein Tamagotchi ist {petStatus}
        </p>
        <p>
          Tage übrig bis zum Schlüpfen: {counter}
        </p>
        <div className="container">
          <button className="button">Lichtschalter</button>
          <button className="button">Temperatur erhöhen</button>
          <button className="button">Temperatur senken</button>
          <button className="button">Füttern</button>
          <button className="button">Sauber machen</button>
          <button className="button">Spielen</button>
        </div>
      </header>
    </div>
  );
}

export default Tamagotchi;
