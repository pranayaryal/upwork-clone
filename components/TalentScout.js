import ArrowRight from './ArrowRight';

const fields = [
  'Development & IT',
  'Design & Creative',
  'Marketing',
]

const TalentScout = () => {
  return (
    <div className="flex justify-start align-top space-x-8">
      <div className="w-[1/3] mt-2">
        <p>Talent Scout</p>
        <p className="text-sm text-gray-400 mt-2">
          Learn how recruiters find you expert developers, designers and marketers.</p>
        <div className="flex align-center justify-start space-x-1 mt-2">
          <a className="text-blue-500 text-sm underline" href="#">
           Talk to Talent Scout 
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="w-4 h-4 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
        {/* Adding to move to top */}
      </div>
      <div className="flex flex-col space-y-3 justify-center w-[1/3] mt-14">
        {fields.map(field => {
          return (
            <p class='text-sm mt-4 text-gray-500'>{field}</p>
          )})}
      </div>
    </div>
  )
}

export default TalentScout;
