import React, { Component } from 'react';
import MenuBar from './MenuBar'
import './Slider.css';


const styles = {
    textAlign: "center",
    paddingTop: "50px"
  };
export default class Slider extends Component {
    render() {
        return (
            <div style={styles}>
            <MenuBar />
          </div>
        )
    }
}
