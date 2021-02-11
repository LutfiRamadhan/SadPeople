import React from 'react';
import {
  StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepOneOne,
} from '../../components/step';

class IntroPage extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  render() {
    const {
      step,
    } = this.state;

    const whatsNow = [
      <StepOne handleClick={this.handleClick} />,
      <StepOneOne handleClick={this.handleClick} />,
      <StepTwo handleClick={this.handleClick} />,
      <StepThree handleClick={this.handleClick} />,
      <StepFour handleClick={this.handleClick} />,
      <StepFive handleClick={this.handleClick} />,
      <StepSix handleClick={this.handleClick} />,
    ];

    return (
      <div>
        {whatsNow[step]}
      </div>
    );
  }
}

export default IntroPage;
