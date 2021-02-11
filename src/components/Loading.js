import React, { useState } from 'react';
import {
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

function Loading(props) {
  const {
    txt, img, btnTxt,
  } = props;

  const {
    url,
  } = useParams();

  const [count, setCount] = useState(3);
  const [canGo, setCanGo] = useState(false);

  const countDown = setInterval(() => {
    if (count === 1) {
      setCanGo(true);
    }
    setCount(count - 1);
  }, 1000);

  if (count === 0) {
    clearInterval(countDown);
  }

  return (
    <div>
      <img src={img} alt="not loaded" />
      <h1>
        {txt}
        {canGo ? '' : ` ${count}`}
      </h1>
      {canGo ? (
        <Link to={`/${url}`}>
          <Button className="btn btn-dark" variant="contained">
            {btnTxt}
          </Button>
        </Link>
      ) : null}
    </div>
  );
}

const propsTypes = {
  txt: PropTypes.node,
  img: PropTypes.node,
  btnTxt: PropTypes.node,
};

const defaultProps = {
  txt: 'Kuy Main lagi',
  img: 'https://c.tenor.com/QYTCqPrMqxEAAAAj/%E3%83%AC%E3%83%83%E3%83%84%E3%82%B4%E3%83%BC-%E5%87%BA%E7%99%BA.gif',
  btnTxt: 'Buruan napa',
};

Loading.propTypes = propsTypes;
Loading.defaultProps = defaultProps;

export default Loading;
