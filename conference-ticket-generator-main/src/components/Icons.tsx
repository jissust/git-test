export function IconInfo({ color = "#D1D0D5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill={color} d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );
}

export function IconArrowLeft({ color = "#FFFFFF" }) {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512"
    width="20"
    height="20"
    >
      <path
        fill={color}
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
  );
}
