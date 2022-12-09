import React from 'react';

class HatchTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
    // this.then = addDays(Date.now(), props.countdownInDays) //NORMAL FUNCTION
    this.then = addTenSeconds(Date.now()) //TEST FUNCTION
  }

  componentDidMount() {
    setInterval(() => {
      var time_diff_ms = this.then - Date.now()
      time_diff_ms < 0 ? time_diff_ms = 0 : time_diff_ms = time_diff_ms
      const time_dict = msToDate(time_diff_ms)
      this.props.updateHatchTimer(time_diff_ms)
      this.setState(time_dict);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {

    return (
      <div className='countdown-header'>
        Zeit bis dein Tamagotchi schlüpft:
        <p>
          Tage: {this.state.days} Stunden: {this.state.hours} Minuten: {this.state.minutes} Sekunden: {this.state.seconds}
        </p>
      </div>
    );
  }
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addTenSeconds(date) {
  var result = new Date(date);
  const secBefore = result.getSeconds()
  result.setSeconds(secBefore + 4)
  return result;
}

function msToDate(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const seconds = Math.floor(minutesms / 1000);
  return { days, hours, minutes, seconds }
}

export default HatchTimer;