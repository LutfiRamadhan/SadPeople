import React from 'react';
import Loading from '../../components/Loading';

class LoadingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      btnTxt: undefined,
      txt: undefined,
      img: undefined,
    };
  }

  render() {
    const {
      btnTxt, txt, img,
    } = this.state;
    return (<Loading btnTxt={btnTxt} txt={txt} img={img} />);
  }
}

export default LoadingPage;
