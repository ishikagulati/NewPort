import Skill from './SkillBox';
import PropTypes from "prop-types";

const SkillGroup = ({ data, title }) => {
  return (
    <div className='i7'>
      <div className="i8">{title}</div>
      <div className="i9">
        {data.map((item, index) => {
          return (
            <Skill key={item.id || index} src={item.src} name={item.name} />
          );
        })}
      </div>
    </div>
  );
}

SkillGroup.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillGroup;

