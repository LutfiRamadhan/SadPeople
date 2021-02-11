import React, { useState } from 'react';
import {
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

function StepOne(props) {
  const {
    handleClick,
  } = props;
  return (
    <div>
      <h1>Luwak White Kopi passwordnya?</h1>
      <Button className="btn btn-dark" onClick={handleClick} variant="contained">
        Kopi nikmat nyaman di kamu, tapi sayangnya aku cuma dianggep temanmu.
      </Button>
    </div>
  );
}

function StepOneOne(props) {
  const {
    handleClick,
  } = props;
  setTimeout(() => {
    handleClick();
  }, 1000);
  return (
    <div>
      <img src="https://media.tenor.com/images/2f67c04e9224e4b8e5829e0dbcb0642a/tenor.gif" alt="SadPeople" />
    </div>
  );
}

function StepTwo(props) {
  const {
    handleClick,
  } = props;
  return (
    <div>
      <h1>Untuk Kamu yang sedih mulu, dan lagi ulang tahun hari ini. Cie tua, Kepala 2 ya?!</h1>
      <Button className="btn btn-dark" onClick={handleClick} variant="contained">
        Hmm..
      </Button>
    </div>
  );
}

function StepThree(props) {
  const {
    handleClick,
  } = props;

  const [dikejar, setDikejar] = useState(0);
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [text, setText] = useState('Tadinya aku mau buatin tempat hiburan buat kamu tapi tiba tiba ada kesibukan lain jadi nanti lagi lah ya! Ga apa ya?');

  const makeNewPosition = () => {
    const h = window.innerHeight - 50;
    const nh = Math.floor(Math.random() * h);
    setTop(`${nh}px`);
    const w = window.innerWidth - 50;
    const nw = Math.floor(Math.random() * w);
    setLeft(`${nw}px`);
  };

  const kabur = () => {
    makeNewPosition();
    if (dikejar === 10) {
      setText('Tidak menerima penolakan yaa?! wlee :p');
      setTimeout(() => {
        setText('Tadinya aku mau buatin tempat hiburan buat kamu tapi tiba tiba ada kesibukan lain jadi nanti lagi lah ya! Ga apa ya?');
      }, 750);
      setDikejar(0);
    }
    setDikejar(dikejar + 1);
  };
  return (
    <div>
      <img src="https://c.tenor.com/vqxQwc7Mz-AAAAAj/%E3%81%AF%E3%81%A6%E3%81%AA-%E4%BD%95%E6%95%85.gif" alt="Boleh ya?Boleh ya?Boleh ya?" />
      <h1>{text}</h1>
      <div className="col-md-3 offset-md-4">
        <div className="row">
          <div className="col-md-3 offset-md-5">
            <Button className="btn btn-dark" onClick={handleClick} variant="contained">
              Iya
            </Button>
          </div>
          <div className="col-md-3">
            <Button
              className="btn btn-dark position-fixed"
              variant="contained"
              onMouseEnter={kabur}
              onClick={kabur}
              style={{ top, left }}
              position="fixed"
            >
              Ga mau tau
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepFour(props) {
  const {
    handleClick,
  } = props;

  return (
    <div>
      <img src="https://c.tenor.com/tX9__1gu5WkAAAAj/%E5%9C%9F%E4%B8%8B%E5%BA%A7-%E3%81%94%E3%82%81%E3%82%93.gif" alt="Boleh ya?Boleh ya?Boleh ya?" />
      <h1>Makasih banget ni udah jadi temen buat aku nanya nanya yang ga penting</h1>
      <Button className="btn btn-dark" onClick={handleClick} variant="contained">
        Y
      </Button>
    </div>
  );
}

function StepFive(props) {
  const {
    handleClick,
  } = props;

  const [text, setText] = useState('yaudah ni gapake lama, aku siapin dulu');
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setText('yaudah ni gapake lama, aku siapin dulu. Oke Beres');
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      <img src="https://c.tenor.com/CJSGt0M6gfIAAAAj/%E5%83%8D%E3%81%8F-%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0.gif" alt="kuy" />
      <h1>{text}</h1>
      {!isLoading ? (
        <Button className="btn btn-dark" onClick={handleClick} variant="contained">
          kuy
        </Button>
      ) : null}
    </div>
  );
}

function StepSix(props) {
  const {
    handleClick,
  } = props;

  console.log(handleClick);

  const [pos, setPos] = useState(-250);

  const Baris1 = {
    marginLeft: `${pos}px`,
  };

  const Baris2 = {
    marginLeft: '-70px',
    overflow: 'hidden',
  };

  const w = window.innerWidth;
  const sampai = w + 250;
  let movitmovit;

  const [lay, setLay] = useState(false);

  let layout = (
    <>
      <div className="row" style={(!lay) ? { display: 'none' } : { display: '' }}>
        <p className="mx-auto">
          Reloading Page..
        </p>
      </div>
      <div className="row" style={(lay) ? { display: 'none' } : { display: '' }}>
        <div className="col-md-12">
          <div
            className="row"
            style={
              {
                overflow: 'hidden',
                maxWidth: sampai,
                maxHeight: '185px',
              }
            }
          >
            <div className="col-md-2 moving" style={Baris1}>
              <img src="https://c.tenor.com/1RyBOGYiFroAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
            </div>
            <div className="col-md-2 moving" style={Baris2}>
              <img src="https://c.tenor.com/1RyBOGYiFroAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="row"
            style={
              {
                overflow: 'hidden',
                maxWidth: sampai,
                maxHeight: '185px',
              }
            }
          >
            <div className="col-md-2 moving" style={Baris1}>
              <img src="https://c.tenor.com/1RyBOGYiFroAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
            </div>
            <div className="col-md-2 moving" style={Baris2}>
              <img src="https://c.tenor.com/1RyBOGYiFroAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={(lay) ? { display: 'none' } : { display: '' }}>
        <div className="col-2">
          <img src="https://c.tenor.com/GNiThyoqaXAAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E5%AC%89%E3%81%97%E3%81%84.gif" alt="kuy" />
        </div>
        <div className="col-2 offset-8">
          <img src="https://c.tenor.com/GNiThyoqaXAAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E5%AC%89%E3%81%97%E3%81%84.gif" style={{ transform: 'scaleX(-1)' }} alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/Aq48a65922EAAAAj/%E3%82%AF%E3%83%A9%E3%83%83%E3%82%AB%E3%83%BC-%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC.gif" alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/mx-SCGnsQOEAAAAj/%E6%8B%8D%E6%89%8B-%E3%83%91%E3%83%81%E3%83%91%E3%83%81.gif" alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/g7m_dcsETm4AAAAj/%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/g7m_dcsETm4AAAAj/%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3-%E6%A5%BD%E3%81%97%E3%81%84.gif" alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/mx-SCGnsQOEAAAAj/%E6%8B%8D%E6%89%8B-%E3%83%91%E3%83%81%E3%83%91%E3%83%81.gif" alt="kuy" />
        </div>
        <div className="col-2">
          <img src="https://c.tenor.com/Aq48a65922EAAAAj/%E3%82%AF%E3%83%A9%E3%83%83%E3%82%AB%E3%83%BC-%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC.gif" style={{ transform: 'scaleX(-1)' }} alt="kuy" />
        </div>
      </div>
    </>
  );

  const redirectWoi = () => {
    // window.open('http://febirthday.dondoitdev.tech', '_self');
    setLay(true);
    layout = 'Mengalihkan Duniamu...';
    return false;
  };
  const movit = () => {
    movitmovit = setTimeout(() => {
      setPos(pos + 10);
      if (pos >= w) {
        window.open('http://febirthday.dondoitdev.tech', '_self');
        // window.location.href = 'http://febirthday.dondoitdev.tech';
        clearTimeout(movitmovit);
        redirectWoi();
      } else {
        movitmovit = setTimeout(() => {
          movit();
          clearTimeout(movitmovit);
        }, 250);
      }
    }, 10);
  };
  movit();

  return (
    <>
      {layout}
    </>
  );
}

const propsTypes = {
  handleClick: PropTypes.node,
};

const defaultProps = {
  handleClick: null,
};

StepOne.propTypes = propsTypes;
StepOne.defaultProps = defaultProps;
StepOneOne.propTypes = propsTypes;
StepOneOne.defaultProps = defaultProps;
StepTwo.propTypes = propsTypes;
StepTwo.defaultProps = defaultProps;
StepThree.propTypes = propsTypes;
StepThree.defaultProps = defaultProps;
StepFour.propTypes = propsTypes;
StepFour.defaultProps = defaultProps;
StepFive.propTypes = propsTypes;
StepFive.defaultProps = defaultProps;
StepSix.propTypes = propsTypes;
StepSix.defaultProps = defaultProps;

export {
  StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepOneOne,
};
