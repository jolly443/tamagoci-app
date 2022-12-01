import React from 'react';
import './styles/StartScreen.css';
import Tamagotchi from './Tamagotchi';


class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleContinueGame = this.handleContinueGame.bind(this);
        this.state = { gameStarted: false };
    }

    handleStartGame() {
        this.setState({ gameStarted: true });
    }

    handleContinueGame() {
        this.setState({ gameStarted: false });
    }

    render() {
        const gameStarted = this.state.gameStarted;
        let button;
        if (gameStarted) {

        }

        return (
            <body className="App">
                <h1 class="h1-header">Willkommen zu deinem Tamagotchi Spiel :)</h1>
                <div class="btn-group">
                    <button id="startGameButton" class="start-game-button" onClick>Starte ein neues Tamagotchi-Abenteuer</button>
                    <button class="start-game-button">Führe dein bisheriges Tamagotchi-Abenteuer fort</button>
                </div>
            </body>
        )
    }
}

function ChooseScreen(props) {
    const gameStarted = props.gameStarted;

    if (gameStarted) {
        return <Tamagotchi />;
    }
    else {
        return <StartScreen />;
    }
}

export default StartScreen;