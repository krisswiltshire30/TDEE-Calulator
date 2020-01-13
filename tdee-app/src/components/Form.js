import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      weight: '',
      height: '',
      activity_level: '',
      body_fat: '',
      bmr: '',
      tdee: ''
    };
  }

  handleChange = (statename, event) => {
    this.setState({ [statename]: event.target.value });
    console.log(this.state.age);
  };

  render() {
    return (
      <form>
        TDEE Calculator
        <p>
          <input
            type="text"
            data-testid="age-test"
            placeholder="Age"
            onChange={(e) => this.handleChange('', e)}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="weight-test"
            placeholder="Weight - kg"
            onChange={(e) => this.setState({ weight: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="height-test"
            placeholder="Height - cm"
            onChange={(e) => this.handleChange('name', e)}
          />
        </p>
        <p>
          <select
            data-testid="activity-test"
            onChange={(e) => this.handleChange('name', e)}>
            <option value="sedentary">Sedentary - office job</option>
            <option value="light">Light Exercise - 1/2 days a week</option>
            <option value="moderate">Moderate Exercise - 3/5 days a week</option>
            <option value="heavy">Heavy Exercise - 6/7 days a week</option>
            <option value="athlete">Athlete - 2x a day</option>
          </select>
        </p>
        <p>
          <input
            type="text"
            data-testid="bodyfat-test"
            placeholder="Body Fat - %"
            onChange={(e) => this.handleChange('name', e)}
          />
        </p>
        <input type="submit" value="Calculate" />
      </form>

    );
  }
}

export default Form;