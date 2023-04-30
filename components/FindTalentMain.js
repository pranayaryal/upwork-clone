import ArrowRight from "./ArrowRight";

const FindTalentMain = (props) => {
    return (
        <div className={`flex p-4 justify-between w-full align-center
            ${props.className && props.className}
            hover:bg-pink-50`}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            >
            <div className='flex flex-col'>
                <p className='text-sm'>{props.first}</p>
                <p className='text-xs mt-2 text-gray-400'>{props.second}</p>
            </div>
            <ArrowRight className='mt-2 w-4 h-4' />

        </div>

    )
}

export default FindTalentMain;