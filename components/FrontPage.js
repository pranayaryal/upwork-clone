import { Arrow } from './Arrow'
import { ArrowDown } from './ArrowDown'
import ArrorRight from './ArrowRight'
import TalentMarketPlaceLarge from './TalentMarketPlaceLarge'
import TalentScout from './TalentScout'
import ProjectCatalog from './ProjectCatalog'
import { useState } from 'react'
import FindTalentMain from './FindTalentMain'
import Star from './Star'

export const FrontPage = () => {
  const hoverTalent = () => {
    setIsTalentOpen(true);
    setIsWorkOpen(false);
    setIsWhyOpen(false)
  }

  const hoverWork = () => {
    setIsTalentOpen(false);
    setIsWorkOpen(true);
    setIsWhyOpen(false)
  }
  const hoverWhy = () => {
    setIsTalentOpen(false);
    setIsWorkOpen(false);
    setIsWhyOpen(true)
  }
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [isTalentMarketPlaceHovered, setIsTalentMarketPlaceHovered] = useState(false);
  const [isProjectCatalogHovered, setIsProjectCatalogHovered] = useState(false);
  const [isTalentScoutHovered, setIsTalentScoutHovered] = useState(false);

  return (
    <div>
      <div className="hidden lg:block px-14 py-4">
        <nav className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102 28"
              className="h-6 w-auto fill-current text-green-500"
              role="img" aria-hidden="true">
              <path fill="#14a800"
                d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path><path fill="#14a800" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path><polygon fill="#14a800" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon><path fill="#14a800" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path><path fill="#14a800" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z">
              </path>
            </svg>
            <div className="flex space-x-1"
              onMouseEnter={() => hoverTalent()}
            >
              <p className="text-sm hover:text-green-300">Find Talent</p>
              <ArrowDown rotate={isTalentOpen} />
            </div>
            <div className="flex space-x-1"
              onMouseEnter={() => hoverWork()}
            >
              <p className="text-sm">Find Work</p>
              <ArrowDown rotate={isWorkOpen} />
            </div>
            <div className="flex space-x-1"
              onMouseEnter={() => hoverWhy()}
              onMouseLeave={() => setIsWhyOpen(false)}
            >
              <p className="text-sm">Why Upwork</p>
              <ArrowDown rotate={isWhyOpen} />
            </div>
            <div className="flex space-x-1">
              <p className="text-sm">Enterprise</p>
              <ArrowDown />
            </div>
          </div>
          <div>Search Etc</div>
        </nav>


      </div>
      {isTalentOpen &&
        <div className="z-50 w-full shadow"
          onMouseLeave={() => setIsTalentOpen(false)}>
          <div className="w-full py-4 px-11 flex justify-start space-x-10">
            <div className='w-1/4 border-r-2 border-gray-500 p-3'>
              <FindTalentMain
                first="Post a job and hire a pro"
                onMouseEnter={() => setIsTalentMarketPlaceHovered(true)}
                onMouseLeave={() => setIsTalentMarketPlaceHovered(false)}
                second="Talent Marketplace" />
              <FindTalentMain
                className="mt-4"
                onMouseEnter={() => setIsProjectCatalogHovered(true)}
                onMouseLeave={() => setIsProjectCatalogHovered(false)}
                first="Browse and buy projects"
                second="Project Catalog" />
              <FindTalentMain
                onMouseEnter={() => setIsTalentScoutHovered(true)}
                onMouseLeave={() => setIsTalentScoutHovered(false)}
                className="mt-4"
                first="Let us find you the right client"
                second="Talent Scout" />
            </div>
            <div className='w-3/4'>
              {isTalentMarketPlaceHovered && <TalentMarketPlaceLarge />}
              {isProjectCatalogHovered && <ProjectCatalog />}
              {isTalentScoutHovered && <TalentScout />}
            </div>
          </div>
        </div>
      }
      {
        isWorkOpen &&
        <div className="h-[15vh] z-50 w-full shadow"
          onMouseLeave={() => setIsWorkOpen(false)}>
          <div className="w-full px-11 py-4 flex items-center justify-start space-x-32">
            <div className='flex flex-col w-[1/5] p-8 hover:bg-pink-50'>
              <p className='text-sm'>Ways to earn</p>
              <p className='text-xs mt-2 text-gray-400'>Learn why Upwork has the right opportuities for you.</p>
            </div>
            <div className='flex flex-col w-[1/5] p-8 hover:bg-pink-50'>
              <p className='text-sm'>Find work for your skills</p>
              <p className='text-xs mt-2 text-gray-400'>Explore the kind of work available in your field.</p>
            </div>
            <div className='flex flex-col w-[3/5] p-8 hover:bg-pink-50'>
              <p className='text-sm'>Find ways to promote yourself.</p>
              <p className='text-xs mt-2 text-gray-400'>Show clients you're the one they want.</p>
            </div>
          </div>
        </div>
      }
      {isWhyOpen &&
        <div className="h-[40vh] z-50 w-full shadow">
          <div className="w-full px-11 py-4 flex items-top justify-start space-x-20">
            <div className='h-[25vh] grid grid-cols-2 gap-x-12 gap-y-0 w-[1/5] p-4 hover:bg-pink-50'>
              <div className='p-2'>
                <p className='text-sm'>Success Stories</p>
                <p className='text-xs mt-2 text-gray-400 text-wrap'>Discover how teams work <br />strategically and grow together.</p>
              </div>
              <div className='p-2'>
                <p className='text-sm'>Reviews</p>
                <p className='text-xs mt-2 text-gray-400'>See what's it like to collaborate on <br />Upwork.</p>
              </div>
              <div className='p-2'>
                <p className='text-sm'>How to hire</p>
                <p className='text-xs mt-2 text-gray-400'>Learn about the different ways to get <br />work done.</p>
              </div>
              <div className='p-2'>
                <p className='text-sm'>How to find work</p>
                <p className='text-xs mt-2 text-gray-400'>Learn about how to grow your <br />independent career.</p>
              </div>
            </div>
            <div className='flex flex-col w-[4/5] p-8 hover:bg-pink-50 space-y-2'>
              <p className='text-sm'>Where work gets done.</p>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg hover:bg-green-50">
                  <span className="text-gray-500 text-xs">Guides</span>
                  <span className="text-gray-800 mt-2 text-sm">Getting Started as a Freelancer</span>
                </div>
                <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg">
                  <span className="text-gray-500 text-xs">Guides</span>
                  <span className="text-gray-800 mt-2 text-sm">Growing Your Freelancer Career</span>
                </div>
                <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg">
                  <span className="text-gray-500 text-xs">Guides</span>
                  <span className="text-gray-800 mt-2 text-sm">Hiring & Working with Independent Talent</span>
                </div>
                <div className="flex align-center justify-start space-x-1 mt-2">
                  <a className="text-blue-500 text-sm underline" href="#">
                    See Resources
                  </a>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="w-4 h-4 mt-1">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>

              </div>
            </div>
          </div>

        </div>}
      <div className="px-4 md:px-8 lg:px-52">
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8 md:mt-10">
          <div className="flex flex-col items-left justify-center w-full">
            <h1 className="md:text-7xl text-6xl font-serif text-indigo-500 tracking-tight">
              {'Pick the'}
              <br />
              {'best '}
              <br className='hidden md:block lg:hidden' />
              {'talent'}
            </h1>
            <p className="text-2xl mt-3 text-gray-500">You can find them right here</p>
            <button className='w-36 mt-8 bg-indigo-400 py-2 rounded-full text-white'>Get Started</button>

          </div>
          <img className='hidden md:block md:w-96 lg:w-auto md:h-[1/2]' src="./teamwork.svg" />


        </div>
        <p className='text-gray-500 mt-4'>Trusted by</p>
        <div className='flex'>
         <img src="./coffee.svg" className="w-36 h-36"/> 
        </div>
        <h1 className='text-4xl md:text-5xl tracking-tight font-serif mt-4'>Up your work game, it's free.</h1>
        <div className='flex flex-col mt-8 space-y-4'>
          <div className='flex space-x-2'>
            <p>Logo</p>
            <div className="flex flex-col space-y-4">
              <p className='text-2xl'>No cost to join.</p>
              <p className='text-gray-600 text-sm mt-1'>Register and browse professionals, explore projects, or even book a consultation</p>
            </div>

          </div>
          <div className='flex space-x-2'>
            <p>Logo</p>
            <div className="flex flex-col space-y-4">
              <p className='text-2xl'>Post a job and hire top talent.</p>
              <p className='text-gray-600 text-sm mt-1'>Finding talent doesn't have to be a chore.
              Post a job or we can search for you!</p>
            </div>

          </div>
          <div className='flex space-x-2'>
            <p>Logo</p>
            <div className="flex flex-col space-y-4">
              <p className='text-2xl'>Work with the best without breaking the bank.</p>
              <p className='text-gray-600 text-sm mt-1'>Upwork makes it affordable to
              up your work and take advantage of low transaction rates.</p>
            </div>

          </div>

        </div>
        <button className="w-full md:w-64 mt-8 text-indigo-700 border-indigo-700 border-2 rounded-full py-3">Learn How to Hire</button>

        <h1 className="mt-8 text-4xl md:text-5xl font-serif md:mt-12">Browse talent by category</h1>
        <div className="flex flex-col my-10 space-y-4 md:space-y-0 md:grid md:gap-y-6 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4">
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Development & IT</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.85/5</p>
              </div>
              <p className="text-gray-500">1805 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Sales & Marketing</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.92/5</p>
              </div>
              <p className="text-gray-500">1805 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Design & Creative</p>
            <div className="flex space-x-14 mt-2">
              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.77/5</p>
              </div>
              <p className="text-gray-500">1805 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Finance & Accounting</p>
            <div className="flex space-x-14 mt-2">
              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.77/5</p>
              </div>
              <p className="text-gray-500">1805 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Writing & Translation</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.92/5</p>
              </div>
              <p className="text-gray-500">1805 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Admin & Customer Support</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.77/5</p>
              </div>
              <p className="text-gray-500">508 skills</p>

            </div>
          </div>
          <div className="flex bg-pink-50 flex-col p-5 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Engineering & Architecture</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.77/5</p>
              </div>
              <p className="text-gray-500">508 skills</p>

            </div>
          </div>
          <div className="flex flex-col p-5 bg-pink-50 hover:bg-gray-200 rounded-xl transition duration-150
            hover:ease-in-out">
            <p className="text-xl">Legal</p>
            <div className="flex space-x-14 mt-2">

              <div className="flex space-x-2">
                <Star />
                <p className="text-gray-500">4.77/5</p>
              </div>
              <p className="text-gray-500">508 skills</p>

            </div>
          </div>


        </div>

      </div>
      <div className="w-full md:px-8 lg:px-52">
        <div className="flex flex-col-reverse md:flex-row w-full">
            <div className="w-full md:w-3/5 bg-green-800 px-4 py-4 md:py-6 md:p-8 lg:px-12 lg:py-8">
              <p className='text-xl text-white'>Enterprise Suite</p>
              <h1 className="text-4xl text-white md:text-5xl leading-10 lg:leading-11 font-serif mt-4 lg:mt-8">
              This is how<br/>good companies<br/>
              find good company.</h1>
              <p className="text-white text-lg leading-6 mt-2 md:mt-5 lg:mt-8">
              Access the top 1% of talent on Upwork, and
              a full suite of hybrid workforce management
              tools. This is how innovation works now.
              </p>
              <div className='flex space-x-2 mt-4 md:mt-4 lg:mt-8'>
                <p className='text-white'>Icon</p>
                <p className='text-white'>Access expert talent to fill your skill gaps</p>
              </div>
              <div className='flex space-x-2 mt-2'>
                <p className='text-white'>Icon</p>
                <p className='text-white'>Control your workflow: hire, classify and pay your talent</p>
              </div>
              <div className='flex space-x-3 mt-2'>
                
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                    className="w-4 h-4 text-violet-500 mt-1">
                <path fill="white" d="M57,39.998V40h-1V29.998c0.553,0,1-0.447,1-1v-4c0-13.807-11.193-25-25-25s-25,11.193-25,25v4
                        c0,0.553,0.447,1,1,1v10H7c-3.866,0-7,3.134-7,7V57c0,3.865,3.134,7,7,7v-0.002h5c2.211,0,4-1.789,4-4v-16
                        c0-1.479-0.809-2.754-2-3.445V29.998c0.553,0,1-0.447,1-1v-4c0-9.389,7.611-17,17-17s17,7.611,17,17v4c0,0.553,0.447,1,1,1v10.555
                        c-1.191,0.693-2,1.968-2,3.447v16c0,2.211,1.789,4,4,4h5c3.866,0,7-3.135,7-7V46.998C64,43.132,60.866,39.998,57,39.998z M6,61.898
                        C3.718,61.435,2,59.418,2,57V46.998c0-2.419,1.719-4.436,4-4.899V61.898z M14,59.998c0,1.104-0.896,2-2,2H8v-20h4
                        c1.104,0,2,0.896,2,2V59.998z M10,39.998v-10h2v10H10z M32,5.998c-10.493,0-19,8.506-19,19v3H9v-3c0-12.703,10.298-23,23-23
                        s23,10.297,23,23v3h-4v-3C51,14.504,42.493,5.998,32,5.998z M54,29.998V40h-2V29.998H54z M56,62h-4c-1.104,0-2-0.896-2-2V44
                        c0-1.105,0.896-2,2-2h4V62z M62,57c0,2.418-1.719,4.435-4,4.898v-19.8c2.282,0.464,4,2.481,4,4.899V57z"/>
                </svg>
                <p className='text-white'>Partner with Upwork for end-to-end support</p>
              </div>
              <button className="mt-4 md:mt-8 lg:mt-16 bg-white w-2/5 md:w-2/5 lg:w-1/5 text-green-800 px-1 py-2 rounded-full">Learn More</button>
            </div>
            <div className='md:block w-full h-full md:w-2/5 md:h-auto'>
              <img src="./face.webp" className="md:w-full h-1/3 md:h-full object-cover" alt="Face"/>
            </div>
        </div>
        <p>Yo uare here</p>
      </div>
    </div>
  )
}
