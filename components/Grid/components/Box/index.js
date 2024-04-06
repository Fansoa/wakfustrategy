'use client';

import PropTypes from 'prop-types';
import { BoxContainer } from "./styled";

const Box = ({size, abs, ord, state, setHoveredBox}) => {
  if (setHoveredBox) {
    return <BoxContainer $size={size} $state={state} onMouseEnter={() => setHoveredBox({abs, ord})} onMouseLeave={() => setHoveredBox(null)}/>
  }

  return <BoxContainer $size={size} $state={state}/>
}

Box.propTypes = {
  size: PropTypes.number,
  abs: PropTypes.number,
  ord: PropTypes.number,
  state: PropTypes.oneOf(['default', 'player', 'scope', 'target'])
}

export default Box;
