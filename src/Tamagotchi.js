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

  handleSubmit = (event) => {
    event.preventDefault();
  }
  // useEffect(() => {
  //   if (hatchTimer < 5) {
  //     setPetPic(egg_cracked)
  //     setPetStatus("dabei zu schlüpfen")
  //   }
  //   if (hatchTimer === 0) {
  //     setPetPic(husky_default)
  //     const petStatus = document.getElementById('petStatus');
  //     petStatus.innerHTML = "Nun kannst du deinem Tamagotchi einen Namen geben:";

  //     // Pet name show and hide if submitted

  //     // TODO: SET NAME ONLY WHEN SUBMITTED
  //     const petInputField = document.getElementById('petNameInput');
  //     const petInputSubmit = document.getElementById('petNameSubmit');
  //     petInputField?.classList.remove("hidden")
  //     petInputSubmit?.classList.remove("hidden")
  //   }
  // })
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="hidden pet-name">{this.state.petName}</h1>
          <img src={this.state.petPic} alt="Pet" className="pet pet-border"></img>
          <p id="petStatus" className="pet-status">
            Dein Tamagotchi ist {this.state.petStatus}
          </p>
          <div id="petName" className="container hidden">
            <form onSubmit={null}>
              <label>Du kann deinem Tamagotchi nun einen Namen geben:
                <input
                  type="text"
                  value={this.state.petName}
                  onChange={(e) => this.setState(e.target.value)}
                />
              </label>
              <input type="submit" />
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
