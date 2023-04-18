const NavText = ({props}) => {
  return (
    <div className={`flex flex-col ml-4`}>

      <div className="flex flex-col p-2">
        <p className="mt-4">Post a job and hire a pro</p>
        <p className="text-gray-400">Talent Marketplace</p>
      </div>
      <div className="flex flex-col p-2">
        <p className="mt-4">Browse and buy projects</p>
        <p className="text-gray-400">Project Catalog</p>
      </div>
      <div className="flex flex-col p-2">
        <p className="mt-4">Let us find you the right talent</p>
        <p className="text-gray-400">Talent Scout</p>
      </div>
    </div>
  );
}

export default NavText;