

export const TalentMarketPlace = () => {
  return (
    <div className="min-h-[100vh] bg-white absolute z-50 w-full px-4">
      <div className="flex flex-row mt-2 justify-between space-x-5 items-center">
        <div className="flex flex-row justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            className="w-4 h-4"
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
          <div className="flex flex-row justify-between">
            <span className="text-sm ml-4">Talent Marketplace</span>
          </div>
        </div>
        <div>
          <svg
            className={`fill-current h-3 w-3`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>

        </div>
      </div>
    </div>

  );

}
