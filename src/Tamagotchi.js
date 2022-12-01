import {
  useEffect,
  useState,
  React
} from 'react'
import husky_default from './assets/husky-default.png';
import egg_closed from './assets/egg-closed.png'
import egg_cracked from './assets/egg-cracked.png'
import './styles/Tamagotchi.css';


function Tamagotchi() {
  // Pet name popup
  const triggerText = 'Name deines Tamagotchi';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  // Timer
  const [hatchTimer, setHatchTimer] = useState(10);
  const [petName, setPetName] = useState('Ei');
  const [petStatus, setPetStatus] = useState('noch nicht geschlüpft');

  useEffect(() => {
    hatchTimer > 0 && setTimeout(() => setHatchTimer(hatchTimer - 1), 1000);
  }, [hatchTimer]);

  // Set pet (egg) picture depending on timer
  const [petPic, setPetPic] = useState(egg_closed);
  useEffect(() => {
    if (hatchTimer < 5) {
      setPetPic(egg_cracked)
      setPetStatus("dabei zu schlüpfen")
    }
    if (hatchTimer === 0) {
      setPetPic(husky_default)
      const petStatus = document.getElementById('petStatus');
      petStatus.innerHTML = "Nun kannst du deinem Tamagotchi einen Namen geben:";

      // Pet name popup
    }
  })

  return (
    <div className="App">
      <header>
        <h1 className="pet-name">{petName}</h1>
        <img src={petPic} alt="Pet" className="pet pet-border"></img>
        <p id="petStatus" className="pet-status">
          Dein Tamagotchi ist {petStatus}
        </p>
        <input id="pet-name-input" className="pet-input-field"/>
        <p>
          Tage übrig bis zum Schlüpfen: {hatchTimer}
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
