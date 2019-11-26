import React from 'react';
import classes from './Treeline.module.css';

const Treeline = (props) => {
  const { id, width, height, xstart, ystart, x1, y1, x2, y2 } = props;

  const svgStyle = {
    left: `${xstart}px`,
    top: `${ystart}px`
  };

  return (
    <div
      id={id}
      className={classes.TreelineWrapper}
      style={svgStyle}
    >
      <svg
        className={classes.Treeline}
        width={Math.ceil(width)}
        height={Math.ceil(height)}
      >
        <line
          x1={Math.ceil(x1)}
          y1={Math.ceil(y1)}
          x2={Math.ceil(x2)}
          y2={Math.ceil(y2)}
          stroke="#888"
        />
      </svg>
    </div>
  )
};

export default Treeline;
