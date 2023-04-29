

const ProjectCatalog = () => {
    return (
        <div className='flex justify-start align-top'>
            <div className='w-[1/3] mt-2'>
                <p>Project Catalog</p>
                <p class='text-sm text-gray-400'>Browse and buy projects that have a clear scope and price.</p>
                <div className="flex align-center justify-start space-x-1 mt-2">
                    <a className="text-blue-500 text-sm underline" href="#">
                        Browse Project Catalog
                    </a>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="w-4 h-4 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className="w=[2/3] grid grid-cols-3 gap-x-2 gap-y-2">

            </div>
            <div>

            </div>

        </div>
    );
}

export default ProjectCatalog;;