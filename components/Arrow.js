
export const Arrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    fill="none" aria-hidden="true"
    className={`w-4 h-4 mt-1 ${props.isClicked && 'rotate-180'} ease-in-out duration-300`}
    viewBox="0 0 24 24" role="img">
    <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)"
      strokeLinecap="round" strokeLinejoin="round"
      strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
  </svg>
)


