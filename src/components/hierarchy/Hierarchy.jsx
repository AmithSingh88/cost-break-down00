import React, { useState } from 'react';
import './hierarchyStyle.css';

const Hierarchy = () => {

  const [hierarchy, setHierarchy] = useState('None');
  const [hierarchyBg, setHierarchyBg] = useState('#ccc');
  const hierarchyLevels = ['None', 'Basic', 'Advanced', 'Complex'];

  const handleHierarchy = (ascend) => {

    const currentHierarchy = hierarchyLevels.indexOf(hierarchy);

    const newHierarchy = currentHierarchy + ascend;

    if (newHierarchy >= 0 && newHierarchy < hierarchyLevels.length) {

      setHierarchy(hierarchyLevels[newHierarchy]);

      switch (hierarchyLevels[newHierarchy]) {
        case 'None':
          setHierarchyBg('#ccc');
          break;
        case 'Basic':
          setHierarchyBg('#91D4A8');
          break;
        case 'Advanced':
          setHierarchyBg('#E9BE74');
          break;
        case 'Complex':
          setHierarchyBg('#F57F6C');
          break;
        default:
          setHierarchyBg('#fff');

      }
    }
  };

  const hierarchyWidth = (hierarchy) => {
    switch (hierarchy) {

      case 'None':
        return 80;
      case 'Basic':
        return 120;
      case 'Advanced':
        return 160;
      case 'Complex':
        return 200;
      default:
        return 80;
    }
  }

  const width = hierarchyWidth(hierarchy);

  return (
    <div className='hierarchy_parent'>

      <div className="hierarchy_descend"
        onClick={() => handleHierarchy(-1)}
        disabled={hierarchyLevels.indexOf(hierarchy) <= 0}>
        -
      </div>

      <div className="hierarchy_container">

        <div className="hierarchy"
          style={{ width: width, background: hierarchyBg }}>
          {hierarchy}
        </div>

      </div>


      <div className="hierarchy_ascend"
        onClick={() => handleHierarchy(1)}
        disabled={hierarchyLevels.indexOf(hierarchy) >= -1}>
        +
      </div>

    </div>
  )
}

export default Hierarchy