import React from 'react';

import Fade from 'react-reveal/Fade';

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/personal/viola1.jpg';
import { MediaItems, FSPPics } from './MediaItems';
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
              In Spring of 2022, I spent a term studying and performing music in<b>London</b>as part of Dartmouth&apos;s<b>Foreign Study Program.</b>
              I also enjoy teaching viola to young students through the<b>Musical Empowerment</b>program!
            </p>

            <a target="_blank"
              rel="noopener noreferrer"
              href={musicres}
            ><i className="fa-solid fa-download" />Biography & Repertoire List

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
        <div id="fspPics">
          <p>🇬🇧 Some pictures from my time in London! 🇬🇧</p>
          <div className="images">
            {FSPPics.map((item) => {
              return (
                <img className="musicport" src={item.src} alt="music_img" />
              );
            })}
          </div>
        </div>

      </Fade>

    </section>
  );
};

export default Music;
