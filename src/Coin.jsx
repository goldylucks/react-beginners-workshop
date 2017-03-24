import React from 'react'

class Coin extends React.Component {

  state = {
    msg: '',
    score: 0,
  }

  guess = (guessed) => {
    const tossResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    if (guessed === tossResult) {
      this.setState({
        msg: `${tossResult}: Success!`,
        score: this.state.score + 1,
      })
      return
    }
    this.setState({
      msg: `${tossResult}: Failure! :(`,
      score: this.state.score - 1,
    })
    // failure we suck!!!!
  }

  guessHeads = () => this.guess('Heads')
  guessTails = () => this.guess('Tails')

  render() {
    const { msg, score } = this.state
    return (
      <div>
        <h5>Result: {msg}</h5>
        <h5>Score: {score}</h5>
        <button onClick={this.guessHeads}>Heads</button>
        <button onClick={this.guessTails}>Tails</button>
      </div>
    )
  }
}

export default Coin
