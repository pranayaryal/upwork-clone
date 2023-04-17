

const ArrowDown = ({props}) => {
  const rotate = {props}
  console.log(rotate)
   return (
	<svg xmlns="http://www.w3.org/2000/svg" 
	 fill="none" aria-hidden="true"
	//  className={`w-4 h-4 mt-3 ${props.rotate ? 'rotate-180' : ""}`}
	 className={`w-4 h-4 mt-3`}
	 viewBox="0 0 24 24" role="img">
	 <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 10l-6 5-6-5"></path></svg>
   	
   );
}

export default ArrowDown;
