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
      petName: "",
      petNameInput: "",
      petStatus: "noch nicht geschlüpft",
      petPic: egg_closed,
      isHatched: false
    }
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
      hatchTimer?.classList.add("hidden")
      hatchTimer?.classList.remove("shown")
      petNameInput?.classList.remove("hidden")
      petNameInput?.classList.add("shown")
    }
  }

  handleSubmit(e) {
    e.preventDefault(); //prevent reloading the page
    const petNameInput = document.getElementById('petNameInput');
    const petNameDisplay = document.getElementById('petNameDisplay');
    petNameInput?.remove()
    petNameDisplay?.classList.remove("hidden")
    petNameDisplay?.classList.add("shown")
    this.setState({petNameInput: this.state.petName = this.state.petNameInput})
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <img src={this.state.petPic} alt="Pet" className="pet pet-border"></img>
          <div id="petNameDisplay" className="container hidden pet-name">{this.state.petName}</div>
          <p id="petStatus" className="pet-status">
            Dein Tamagotchi ist {this.state.petStatus}
          </p>
          <div id="petNameInput" className="container hidden">
            <form onSubmit={null}>
              <label>Du kann deinem Tamagotchi nun einen Namen geben:
                <input
                  type="text"
                  value={this.state.petNameInput}
                  onChange={(e) => this.setState({petNameInput: e.target.value})}
                />
              </label>
              <button type="submit" className="button-pet-input" onClick={this.handleSubmit}>Name vergeben</button>
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
