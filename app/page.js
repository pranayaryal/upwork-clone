import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='p-4'>
      <div className='flex flex-col'>
        <div>
          <nav className="flex flex-row justify-between items-center w-full lg:hidden">
            <div className='flex flex-row justify-between items-center'>
              <svg viewBox='0 0 100 80' width={70} height={40} className='text-gray-200'>
                <rect width={70} height={5} y={10} rx={8} />
                <rect y={25} width={70} height={5} />
                <rect y={40} width={70} height={5} />
              </svg>
              <a href="/" className='ml-2 mb-2 text-xl text-green-700'>Upwork</a>

            </div>
            <a href="/">Sign Up</a>
          </nav>

          {/* nav for large */}
          <nav>

          </nav>

        </div>
        <div className='flex flex-col justify-between items-center'>
          <div className='max-w-xs my-14 md:max-w-xl md:my-16 md:text-6xl'>
            <h1 className="text-5xl text-center">Find the best people for your job</h1>
            <div className='relative'>
              <input type="text" className="mt-8 lg:mt-12 w-full border-2 box-border rounded-full tracking-wider text-sm px-4 py-4"
                placeholder="Try 'Data Entry' or 'build a website' " />
              <span className='absolute top-7 right-2'>
                <button className='rounded-full bg-green-700 text-sm px-2 py-3 text-white'>
                  Get Started
                </button>
              </span>
            </div>


          </div>
        </div>
      </div>

    </div>



  )
}
