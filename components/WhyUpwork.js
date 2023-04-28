
export const WhyUpwork = () => {
  return (

    <div className="flex flex-col ml-4">
      <span className="text-gray-500 py-4">Success Stories</span>
      <span className="text-gray-500 py-4 bg-green-100">How to hire</span>
      <span className="text-gray-500 py-4">Reviews</span>
      <span className="text-gray-500 py-4">How to find work</span>
      <span className="text-gray-500 py-4">Where work gets done</span>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg hover:bg-green-50">
          <span className="text-gray-500 text-xs">Guides</span>
          <span className="text-gray-500 mt-2 text-sm">Getting Started as a Freelancer</span>
        </div>
        <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg">
          <span className="text-gray-500 text-xs">Guides</span>
          <span className="text-gray-500 mt-2 text-sm">Growing Your Freelancer Career</span>
        </div>
        <div className="flex flex-col px-5 py-3 border-gray-300 border rounded-lg">
          <span className="text-gray-500 text-xs">Guides</span>
          <span className="text-gray-500 mt-2 text-sm">Hiring & Working with Independent Talent</span>
        </div>
      </div>
    </div>

  )
}
