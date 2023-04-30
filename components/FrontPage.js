import { Arrow } from './Arrow'
import { ArrowDown } from './ArrowDown'
import ArrorRight from './ArrowRight'
import TalentMarketPlaceLarge from './TalentMarketPlaceLarge'
import TalentScout from './TalentScout'
import ProjectCatalog from './ProjectCatalog'
import { useState } from 'react'
import FindTalentMain from './FindTalentMain'

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
        <div class="h-[40vh] z-50 w-full shadow">
          <div className="w-full px-11 py-4 flex items-top justify-start space-x-20">
            <div className='h-[25vh] grid grid-cols-2 gap-x-12 gap-y-0 w-[1/5] p-4 hover:bg-pink-50'>
              <div class='p-2'>
                <p className='text-sm'>Success Stories</p>
                <p className='text-xs mt-2 text-gray-400 text-wrap'>Discover how teams work <br />strategically and grow together.</p>
              </div>
              <div class='p-2'>
                <p className='text-sm'>Reviews</p>
                <p className='text-xs mt-2 text-gray-400'>See what's it like to collaborate on <br />Upwork.</p>
              </div>
              <div class='p-2'>
                <p className='text-sm'>How to hire</p>
                <p className='text-xs mt-2 text-gray-400'>Learn about the different ways to get <br />work done.</p>
              </div>
              <div class='p-2'>
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
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>

              </div>
            </div>
          </div>

        </div>}
    </div>
  )
}
