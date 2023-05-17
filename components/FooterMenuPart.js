import { useState } from 'react';



const FooterMenuPart = (props) => {
    const [ showDropDown, setShowDropDown ] = useState(false);

    return (
        <div className='mt-4'>
            <div 
                onClick={() => setShowDropDown(!showDropDown)}
                className="flex justify-between">
                <p>{props.heading}</p>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="white" aria-hidden="true"
                    className={`w-6 h-6 ${showDropDown && 'rotate-180'} ease-in-out duration-300 text-white`}
                    viewBox="0 0 24 24" role="img">
                    <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)"
                        strokeLinecap="round" strokeLinejoin="round"
                        strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
                </svg>
            </div>
            
            {showDropDown && 
                (<div className='flex flex-col mt-4 px-4 space-y-4'>{ props.dropdown.map(p => {
                    return <p className='text-sm'>{p}</p>
                })}</div>)}

            <hr className='mt-4'/>

        </div>
    )

}

export default FooterMenuPart;

