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
      result: ''
    };
  }

  handleChange(event) { }

  render() {
    return (
      <form>
        TDEE Calculator
        <p>
          <input
            type="text"
            data-testid="age-test"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="weight-test"
            placeholder="Weight"
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="height-test"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="activity-test"
            placeholder="Activity Level"
            value={this.state.activity_level}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            data-testid="bodyfat-test"
            placeholder="Body Fat %"
            value={this.state.activity_level}
            onChange={this.handleChange}
          />
        </p>
      </form>
    );
  }
}

export default Form;;;;