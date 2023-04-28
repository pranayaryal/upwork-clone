import Skill from './Skill';

const descAndSrc = [
  'Development & IT',
  'Design & Creative',
  'Sales & Marketing',
  'Writing & Translation',
  'Admin & Support',
  'Finance & Accounting',
  'Engineering & Architecture',
  'Legal'
]


export const Skills = () => {
  return (
    <div>
      <div className='grid gap-3 grid-cols-3 grid-rows-3 mt-4 md:flex md:flex-row md:flex-wrap md:justify-center'>
        { descAndSrc.map((item, index) => {
          return <Skill key={index} description={item} src={item.split(/(\s+)/)[0].toLowerCase()} />
        })}
      </div>
    </div>
  );
}


