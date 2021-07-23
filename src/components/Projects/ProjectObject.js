import React from 'react';

const ProjectObject = (props) => {
  return (
    <div key={props.name}>
      <div className="carouselItem">
        <div className="carouselText">
          <h2>Bot-thoven</h2>
          <p>Text Goes Here</p>
          <p>Date and Icons</p>
        </div>

        <img id="imageBot" src="/src/img/botthoven.png" alt="hi" />
      </div>
    </div>
  );
};

export default ProjectObject;
