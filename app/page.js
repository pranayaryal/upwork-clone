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
          <h1 className="text-4xl text-center m-16">Find the best people for your job</h1>
        </div>
      </div>

    </div>



  )
}
