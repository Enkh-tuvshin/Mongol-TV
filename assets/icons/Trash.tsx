import { Svg, Path } from 'react-native-svg';

export const Trash = (): React.ReactNode => {
  return (
    <Svg
      width="20"
      height="20"
      style={{ borderWidth: 1, borderColor: 'black' }}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M4 7l16 0" />
      <Path d="M10 11l0 6" />
      <Path d="M14 11l0 6" />
      <Path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <Path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </Svg>
  );
};
