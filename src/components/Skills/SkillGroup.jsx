// //import React from 'react'
import Skill from './SkillBox'
import PropTypes from "prop-types";

const SkillGroup = ({data,title}) => {
  return (
    <div className='i7'>
      <div className="i8">{title}</div>
      <div className="i9">
        {data.map((item) => {
          return (
            <Skill key={item.id} src={item.src} name={item.name} />
          );
        })}
      </div>
    </div>
  );
}
SkillGroup.propTypes = {
    data: PropTypes.func,
    title: PropTypes.func,
  };

export default SkillGroup



