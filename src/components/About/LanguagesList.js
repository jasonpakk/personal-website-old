import React from 'react';
import AboutItems from './AboutItems';

const LanguagesList = () => {
  return (
    <div id="languageList">
      {AboutItems.map((item) => {
        return (
          <div className="languageIcon" key={item.name}>
            <i className={item.icon} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>

  );
};

export default LanguagesList;
