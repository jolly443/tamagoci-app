import {
  useEffect,
  useRef,
  React,
  Component
} from 'react'
import husky_default from './assets/husky-blinking.gif';
import egg_closed from './assets/egg-closed.png'
import egg_cracked from './assets/egg-cracked.png'
import './styles/Tamagotchi.css';
import HatchTimer from './HatchTimer.js'


class Tamagotchi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hatchTimer: undefined,
      petName: "Dein Tamagotchi",
      petNameInput: "",
      petStatus: "noch nicht geschlüpft",
      petPic: egg_closed,
      isHatched: false,
      lightsOn: true
    }
    this.switchLight = this.switchLight.bind(this)
    this.updateHatchTimer = this.updateHatchTimer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateHatchTimer(val) {
    this.setState({ hatchTimer: val });
    if (this.state.hatchTimer % 2 == 0) {
      // Half of timer passed
      this.setState({ petPic: egg_cracked })
      this.setState({ petStatus: "dabei zu schlüpfen" })
    }
    if (this.state.hatchTimer == 0) {
      // Timer passed, egg hatches
      this.setState({ isHatched: true })
      this.setState({ petPic: husky_default })
      this.setState({ petStatus: " frisch geschlüpft" })
      const petNameInput = document.getElementById('petNameInput');
      const hatchTimer = document.getElementById('hatchTimer');
      hatchTimer.style.display = "none"
      if (petNameInput !== null) {
        petNameInput.style.display = "flex"
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault(); //prevent reloading the page
    const petNameInput = document.getElementById('petNameInput');
    const petNameDisplay = document.getElementById('petNameDisplay');
    petNameInput?.remove()
    petNameDisplay.style.display = 'flex'
    this.setState({ petNameInput: this.state.petName = this.state.petNameInput })
  }

  switchLight(e) {
    e.preventDefault(); //prevent reloading the page
    const petFrame = document.getElementById('petFrame')
    if (this.state.lightsOn === true) {
      petFrame?.classList.add("pet-frame-dark")
      this.setState({ lightsOn: !this.state.lightsOn })
    }
    else {
      petFrame?.classList.remove("pet-frame-dark")
      this.setState({ lightsOn: !this.state.lightsOn })
    }
  }

  render() {
    return (
      <div className='app'>
        <div>
          <div id="petFrame" className="pet-frame-light">
            <img id="" src={this.state.petPic} alt="Pet" className="pet-pic"></img>
          </div>
        </div>
        <div id="petNameDisplay" className="container hidden pet-name">{this.state.petName}</div>
        <p id="petStatus" className="pet-status">
          {this.state.petName} ist {this.state.petStatus}
        </p>
        <div id="petNameInput" className="hidden">
          <form onSubmit={null}>
            <label>Du kann deinem Tamagotchi nun einen Namen geben:
              <input
                type="text"
                value={this.state.petNameInput}
                onChange={(e) => this.setState({ petNameInput: e.target.value })}
              />
            </label>
            <button type="submit" className="button-pet-input" onClick={this.handleSubmit}>Name vergeben</button>
          </form>
        </div>
        <div id="hatchTimer">
          <HatchTimer countdownInDays={1} updateHatchTimer={this.updateHatchTimer} />
        </div>
        <div className="center">
          <div className="container">
            <button className="button" onClick={this.switchLight}>Lichtschalter</button>
            <button className="button">Temperatur erhöhen</button>
            <button className="button">Temperatur senken</button>
            <button className="button">Füttern</button>
            <button className="button">Sauber machen</button>
            <button className="button">Spielen</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tamagotchi;
