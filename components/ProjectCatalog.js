import ImageCard from "./ImageCard";

const ProjectCatalog = () => {
    return (
        <div className='flex justify-start align-top space-x-8'>
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
            <div className="mt-8 w=[2/3] grid grid-cols-3 gap-x-8 gap-y-8">
              <ImageCard src="./logodesign.jpg" desc="Logo Design" />
              <ImageCard src="./seo.jpg" desc="SEO" />
              <ImageCard src="./wordpress.jpg" desc="Word Press" />
              <ImageCard src="./socialmedia.jpg" desc="Social Media Marketing" />
              <ImageCard src="./videoediting.jpg" desc="Video Editing" />
              <ImageCard src="./blog.jpg" desc="Articles and Blog post" />

            </div>
            <div>

            </div>

        </div>
    );
}

export default ProjectCatalog;;