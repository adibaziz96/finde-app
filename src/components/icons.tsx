import type { IconSvgProps } from "@/types/types";

export const FindeLogo: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    width={width || size}
    height={height || size}
    viewBox="0 0 26 26"
    {...props}
  >
    <circle cx="13" cy="13" r="12.35" stroke="#222" strokeWidth="0.65" fill="#f4f4f4" />
    <path
      d="M7.8,9.1 C7.8,6.5 18.2,6.5 18.2,9.1 C18.2,11.7 7.8,11.7 7.8,9.1 Z"
      fill="#444"
      stroke="#222"
      strokeWidth="0.26"
    />
    <path
      d="M9.1,14.3 C9.1,16.9 16.9,16.9 16.9,14.3"
      stroke="#e63946"
      strokeWidth="0.52"
      fill="none"
    />
    <path
      d="M11.1,13.7 C11.1,13 14.9,13 14.9,13.7"
      stroke="#6d6875"
      strokeWidth="0.39"
      fill="none"
    />
    <circle cx="9.75" cy="11.05" r="0.65" fill="#1d3557" />
    <circle cx="16.25" cy="11.05" r="0.65" fill="#1d3557" />
    <path
      d="M11.7,18.2 C13,19.5 14.3,19.5 15.6,18.2"
      stroke="#457b9d"
      strokeWidth="0.52"
      fill="none"
    />
  </svg>
);
