import * as React from "react";
import Svg, {
    Rect,
    Path,
  } from 'react-native-svg';

const SvgNewNote = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
  >
    <Rect width={36} height={36} fill="#918DAC" rx={7} />
    <Path
      fill="#220C3A"
      fillRule="evenodd"
      d="M21.529 11.29a3.29 3.29 0 0 0-6.582 0v3.657h-3.656a3.29 3.29 0 1 0 0 6.582h3.656v3.656a3.29 3.29 0 0 0 6.582 0V21.53h3.656a3.29 3.29 0 0 0 0-6.582H21.53v-3.656Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgNewNote;
