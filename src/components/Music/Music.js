import React from 'react';

import Fade from 'react-reveal/Fade';

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/personal/viola1.jpg';
import MediaItems from './MediaItems';

const Music = () => {
  return (
    <section data-index="5" id="music">
      <h2>Music</h2>

      <div id="aboutBody">
        <div>
          <img id="musicport" src={img1} alt="music_img" />
        </div>

        <div id="aboutText">
          <p>
            In addition to studying CS, I am<b>double majoring in Music</b>at Dartmouth.
            On campus, I am a member of the<b>Dartmouth Symphony Orchestra,</b>where I play the viola, an instrument I began playing in fourth grade.
          </p>
          <p>
            In addition, I enjoy performing<b>chamber music</b>with friends and teach private lessons to elementary school students
            through the
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://musical-empowerment.org/"
            >Musical Empowerment
            </a>program.
          </p>
        </div>
      </div>

      <Fade bottom>
        <div id="media">
          <Carousel fade>
            {MediaItems.map((item) => {
              return (
                <Carousel.Item>
                  <div className="mediaItem" key={item.name}>
                    <iframe
                      width="560"
                      height="320"
                      src={item.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Fade>

    </section>
  );
};

export default Music;
