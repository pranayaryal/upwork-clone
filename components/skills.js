import Skill from './skill';

const Skills = () => {
  return (
    <div>
      <div className='grid gap-3 grid-cols-3 grid-rows-3 mt-4 md:flex md:flex-row md:flex-wrap md:justify-center'>
        <Skill description='Development & IT' src="development"/>
        <Skill description='Design & Creative' src="design"/>
        <Skill description='Sales & Marketing' src="sales"/>
        <Skill description='Writing & Translation' src="writing"/>
        <Skill description='Admin & Support' src="admin"/>
        <Skill description='Finance & Accounting' src="finance"/>
        <Skill description='Engineering & Architecture' src="architecture"/>
        <Skill description='Legal' src="legal"/>
      </div>
    </div>
  );
}

export default Skills;