import React from "react";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 500,
    label: "500 zł"
  },
  {
    value: 1500,
    label: "1500 zł"
  },
  {
    value: 5000,
    label: "5000 zł"
  }
];

const days_marks = [
  {
    value: 30,
    label: "30 dni"
  },
  {
    value: 60,
    label: "60 dni"
  }
];

function valuetext(value) {
  return `${value} zł`;
}

class App extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-info">Witamy!</div>
        <div id="sliders">
          <h2>Wybierz kwotę</h2>
          <Slider
            defaultValue={1500}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={100}
            max={5000}
            min={500}
            valueLabelDisplay="auto"
            marks={marks}
            valueLabelDisplay="on"
          />
          <h2 id="days-h2">Licba dni</h2>
          <Slider
            defaultValue={1500}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            max={60}
            min={2}
            valueLabelDisplay="auto"
            marks={days_marks}
            valueLabelDisplay="on"
          />
        </div>
      </div>
    );
  }
}

export default App;
