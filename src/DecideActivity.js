import React, { Component } from 'react'

class DecideActivity extends Component {
  state =
    {
      longitude: 0
    };


  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      this.setState({
        longitude: position.coords.longitude
      })
    }, (err) => {
      console.log(err)
    });



    return (
      <div>
        {this.state.longitude}
      </div>
    )
  }
}

export default DecideActivity