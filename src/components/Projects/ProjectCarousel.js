/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProjectObject from './ProjectObject';

const options = {
  infiniteLoop: true,
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  swipeable: 'false',
  width: '60vw',
};

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <div className="projectCarousel">

        <button type="button" onClick={this.prev}>
          <i className="fas fa-chevron-left" />
        </button>

        <Carousel {...options}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
        >
          <ProjectObject name="corgi" />
        </Carousel>

        <button type="button" onClick={this.next}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>

    );
  }
}

export default ProjectCarousel;
