/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

const options = {
  infiniteLoop: true,
  showArrows: false,
  showStatus: false,
  showThumbs: false,
  swipeable: 'false',
  width: '500px',
};

const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };

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
      <div>
        <button type="button" onClick={this.prev} style={buttonStyle}>
          Prev
        </button>
        <button type="button" onClick={this.next} style={buttonStyle}>
          Next
        </button>

        <Carousel {...options}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
        >
          <div className="carouselItem" key="slide1">
            <img
              alt="hi1"
              src="https://i0.wp.com/readysetpuppy.com/wp-content/uploads/2019/09/Corgi-at-home.jpg?fit=998%2C463&ssl=1&resize=1280%2C720"
            />
          </div>
          <div className="carouselItem" key="slide2">
            <img
              alt="hi2"
              src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"
            />
          </div>
        </Carousel>
      </div>

    );
  }
}

export default ProjectCarousel;
