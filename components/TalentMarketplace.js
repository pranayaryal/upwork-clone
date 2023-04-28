

export const TalentMarketPlace = (props) => {
  return (
    <div className="bg-white absolute
      z-50 left-0 w-full px-4 py-4 flex flex-col
        justify-start align-center h-screen">
      <div className="flex flex-row py-2
        justify-between space-x-5 items-center
        border-b-2">
        <div className="flex flex-row justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            className="w-4 h-4 cursor-pointer"
            onClick={() => props.closeTalent()}
            viewBox="0 0 24 24"
            role="img">

            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5" d="M14 18l-5-6 5-6" />
          </svg>
          <div>
            <span className="text-sm ml-4">Talent Marketplace</span>
          </div>
        </div>
        <svg
          onClick={() => props.closeAll()}
          className={`fill-current h-4 w-4 text-gray-500 cursor-pointer`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>

      </div>
      {/* <hr className="mt-2 ml-[-20px] mr-[-10px]" /> */}
      <p className="mt-4 text-xs text-gray-400">Learn about working with talent
        or explore your hiring needs</p>
      <p className="mt-8 text-sm text-gray-500">Development & IT</p>
      <p className="mt-8 text-sm text-gray-500">Sales & Marketing</p>
      <p className="mt-8 text-sm text-gray-500">Writing and Translation</p>
      <p className="mt-8 text-sm text-gray-500">Admin & Customer Support</p>
      <p className="mt-8 text-sm text-gray-500">Finance & Accounting</p>
      <p className="mt-8 text-sm text-gray-500">HR & Training</p>
      <p className="mt-8 text-sm text-gray-500">Legal</p>
      <p className="mt-8 text-sm text-gray-500">Engineering & Architecture</p>
      <p className="mt-8 text-sm text-gray-500">Hire Freelancers</p>
    </div>

  );

}
