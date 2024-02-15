import { FC, SVGProps } from 'react';

const DropDownIcon: FC<SVGProps<SVGSVGElement>> = ({
  stroke,
  width,
  height,
}) => (
  <svg
    width={width ?? '46'}
    height={height ?? '46'}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 17.25L23 28.75L34.5 17.25"
      stroke={stroke ?? 'white'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DropDownIcon;
