import * as React from "react";
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Filter,
  FeFlood,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
  FeColorMatrix,
  FeOffset,
} from 'react-native-svg';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const SvgSummaryTab = ({ color = '#918DAC', width = 51, height = 47 }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={47}
    fill="none"
  >
    <Rect
      width={36}
      height={36}
      x={16}
      fill={color}
      rx={8}
      transform="rotate(17.71 16 0)"
    />
    <G Filter="url(#a)">
      <Rect
        width={36}
        height={36}
        y={11}
        fill="#fff"
        fillOpacity={0.03}
        rx={8}
      />
    </G>
    <Path
      fill="url(#b)"
      d="M33 28.941a9.37 9.37 0 0 0-9.358-9.361h-11.28a9.362 9.362 0 1 0 0 18.723h10.625v3.387l6.664-5.578A9.347 9.347 0 0 0 33 28.942Zm-24.703 0a4.068 4.068 0 0 1 4.064-4.064h11.28a4.064 4.064 0 0 1 0 8.128h-11.28a4.068 4.068 0 0 1-4.064-4.064Z"
    />
    <Path
      fill="url(#c)"
      d="M23.195 30.322a1.381 1.381 0 1 0 0-2.762 1.381 1.381 0 0 0 0 2.762Z"
    />
    <Path
      fill="url(#d)"
      d="M12.804 30.322a1.381 1.381 0 1 0 0-2.762 1.381 1.381 0 0 0 0 2.762Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={-5.654}
        x2={24.796}
        y1={44.241}
        y2={15.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#676767" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.89} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={21.017}
        x2={24.576}
        y1={30.641}
        y2={28.198}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#676767" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.89} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={10.626}
        x2={14.185}
        y1={30.641}
        y2={28.198}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#676767" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.89} />
      </LinearGradient>
      <Filter
        id="a"
        width={56}
        height={56}
        x={-10}
        y={1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeGaussianBlur in="BackgroundImageFix" stdDeviation={5} />
        <FeComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_40_251"
        />
        <FeBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_40_251"
          result="shape"
        />
        <FeColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <FeOffset />
        <FeGaussianBlur stdDeviation={19.116} />
        <FeComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <FeColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
        <FeBlend in2="shape" result="effect2_innerShadow_40_251" />
        <FeColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <FeOffset dy={4.779} />
        <FeGaussianBlur stdDeviation={2.389} />
        <FeComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <FeColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
        <FeBlend
          in2="effect2_innerShadow_40_251"
          result="effect3_innerShadow_40_251"
        />
      </Filter>
    </Defs>
  </Svg>
)
export default SvgSummaryTab;
