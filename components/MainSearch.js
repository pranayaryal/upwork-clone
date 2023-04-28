
import { Skills } from './Skills'

export const MainSearch = (props) => {
    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='max-w-xs mt-14 mb-10 md:max-w-xl md:mt-16 lg:mb-8 md:text-6xl'>
                <h2 className="text-4xl tracking-tight text-center">
                    {'Find the best'}
                    <br className='md:hidden' />
                    {' people '}
                    <br className='hidden md:block lg:hidden' />
                    {'for'}
                    <br className='md:hidden' />
                    {' your job'}
                </h2>
            </div>
            <div className='w-[95%] md:w-[90%] lg:w-2/5 md:text-6xl mt-0'>
                <div className='relative'>
                    <input type="text"
                        // #f2f7f2
                        className="focus:outline-none focus:bg-green-50 lg:mt-12 w-full border-2 box-border rounded-full tracking-wider text-sm px-6 py-4"
                        placeholder="Try 'Data Entry' or 'build a website' " />
                    <span className='hidden md:block md:absolute md:top-0 lg:top-7 md:right-2'>
                        <button className='rounded-full bg-green-700 w-32 text-sm px-2 py-3 text-white'>
                            Get Started
                        </button>
                    </span>
                    <span className='absolute top-1.5 right-2 md:hidden'>
                        <button className='flex flex-col justify-center w-11 h-11 rounded-full bg-green-700 text-sm p-3 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24"
                                role="img">
                                <path vectorEffect="non-scaling-stroke" stroke="white"
                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"
                                    d="M3 11.477h18m-7.477 7.753L21 11.478 13.523 4"></path>
                            </svg>
                        </button>
                    </span>
                </div>
                <Skills />
            </div>
        </div>

    );
}