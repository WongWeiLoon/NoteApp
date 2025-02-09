import * as React from 'react';
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

const SvgHomeTab = ({ color = '#918DAC', width = 51, height = 47 }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    // {...props}
    >
    <Rect
      width={36}
      height={36}
      x={16}
      fill={color}
      rx={8}
      transform="rotate(17.71 16 0)"
    />
    <G filter="url(#a)">
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
      fillRule="evenodd"
      d="M13.808 15.149C16.246 12.492 19.552 11 23 11c3.448 0 6.754 1.492 9.192 4.149C34.63 17.805 36 21.407 36 25.163v7.082c0 2.198 0 3.297-.327 4.164-.44 1.156-1.283 2.075-2.344 2.554-.803.364-1.812.364-3.829.364H23c-3.448 0-6.754-1.492-9.192-4.149C11.37 32.523 10 28.92 10 25.164c0-3.757 1.37-7.36 3.808-10.016Zm3.417 8.436c0-.41.15-.804.416-1.095.267-.29.628-.453 1.005-.453h8.688c.383 0 .75.166 1.022.462.271.295.423.696.423 1.113 0 .418-.152.819-.423 1.114a1.388 1.388 0 0 1-1.022.461h-8.667a1.321 1.321 0 0 1-.562-.116 1.42 1.42 0 0 1-.474-.348 1.568 1.568 0 0 1-.31-.523 1.672 1.672 0 0 1-.096-.615Zm4.332 6.3c0-.41.15-.804.417-1.095.266-.29.628-.453 1.004-.453h4.334c.383 0 .75.166 1.022.461.271.296.423.696.423 1.114 0 .418-.152.819-.423 1.114a1.388 1.388 0 0 1-1.022.461H23a1.318 1.318 0 0 1-.562-.116 1.42 1.42 0 0 1-.475-.348 1.572 1.572 0 0 1-.31-.523 1.675 1.675 0 0 1-.095-.615Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={2.5}
        x2={37.781}
        y1={42.596}
        y2={20.364}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.89} />
      </LinearGradient>
      <Filter
        id="a"
        width={56}
        height={56}
        x={-10}
        y={1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeGaussianBlur in="BackgroundImageFix" stdDeviation={5} />
        <FeComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_40_461"
        />
        <FeBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_40_461"
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
        <FeBlend in2="shape" result="effect2_innerShadow_40_461" />
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
          in2="effect2_innerShadow_40_461"
          result="effect3_innerShadow_40_461"
        />
      </Filter>
    </Defs>
  </Svg>
);
export default SvgHomeTab;
