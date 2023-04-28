
const Skill = ({ description, src }) => {
  return (
    <div className="flex w-26 h-24 rounded-xl justify-start items-center flex-col p-3 bg-gray-100
      md:flex-row md:h-12 md:rounded-full md:p-4">
      <img className="w-8 h-8" src={`${src}.svg`} />
      <span className="text-center text-xs mt-3 md:ml-2 md:mt-0">{description}</span>
    </div>
  )

};

export default Skill;