import React from 'react';

import Fade from 'react-reveal/Fade';

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/personal/viola1.jpg';
import MediaItems from './MediaItems';
import musicres from '../../img/personal/musicres.pdf';

const Music = () => {
  return (
    <section data-index="5" id="music">
      <h2>Music</h2>

      <Fade bottom>
        <div id="aboutBody">
          <div>
            <img id="musicport" src={img1} alt="music_img" />
          </div>

          <div id="aboutText">
            <p>
              In addition to studying CS, I am<b>double majoring in Music</b>at Dartmouth.
              On campus, I play viola with the<b>Dartmouth Symphony Orchestra,</b>and enjoy performing<b>chamber music</b>with friends.
            </p>
            <p>
              This spring, I will be<b>studying abroad in London</b>to finish up my music major in the musical capital of Europe!
            </p>
            <a target="_blank"
              rel="noopener noreferrer"
              href={musicres}
            >Biography & Repertoire List
            </a>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div id="media">
          <Carousel fade interval={null}>
            {MediaItems.map((item) => {
              return (
                <Carousel.Item key={item.name}>
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
                  <Carousel.Caption>
                    <p>{item.caption}</p>
                  </Carousel.Caption>
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
