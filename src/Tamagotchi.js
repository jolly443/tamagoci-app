import {
  useEffect,
  useState,
  React,
  Component
} from 'react'
import husky_default from './assets/husky-default.png';
import egg_closed from './assets/egg-closed.png'
import egg_cracked from './assets/egg-cracked.png'
import './styles/Tamagotchi.css';
import HatchTimer from './HatchTimer.js'


class Tamagotchi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hatchTimer: undefined,
      petName: "Ei",
      petNameInput: "",
      petStatus: "noch nicht geschlüpft",
      petPic: egg_closed,
      isHatched: false
    }
    this.updateHatchTimer = this.updateHatchTimer.bind(this)
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
      this.setState({ petStatus: "geschlüpft" })
      const petName = document.getElementById('petName');
      const hatchTimer = document.getElementById('hatchTimer');
      hatchTimer?.classList.add("hidden")
      hatchTimer?.classList.remove("shown")
      petName?.classList.add("shown")
      petName?.classList.remove("hidden")
    }
  }

  // TODO: Set PetName and HTML h1 when submitted
  handleSubmit() {
    const petName = document.getElementById('petName');
    const petNameDisplay = document.getElementById('petNameDisplay');
    petName?.classList.remove("shown")
    petName?.classList.add("hidden")
    petNameDisplay?.classList.remove("hidden")
    petNameDisplay?.classList.add("shown")
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <img src={this.state.petPic} alt="Pet" className="pet pet-border"></img>
          <h1 id="petNameDisplay" className="container shown pet-name">asd</h1>
          <p id="petStatus" className="pet-status">
            Dein Tamagotchi ist {this.state.petStatus}
          </p>
          <div id="petName" className="container hidden">
            <form onSubmit={null}>
              <label>Du kann deinem Tamagotchi nun einen Namen geben:
                <input
                  type="text"
                  value={this.state.petNameInput}
                  onChange={(e) => this.setState({petNameInput: e.target.value})}
                />
              </label>
              <input type="submit" onClick={this.handleSubmit}/>
            </form>
          </div>
          <div id="hatchTimer">
            <HatchTimer countdownInDays={1} updateHatchTimer={this.updateHatchTimer} />
          </div>
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
}

export default Tamagotchi;
