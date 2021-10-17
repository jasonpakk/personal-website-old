import React from 'react';

import FoodItems from './FoodItems';

import img1 from '../../img/personal/viola1.jpg';
import img2 from '../../img/personal/viola2.jpg';

const Personal = () => {
  return (
    <section data-index="5" id="personal">
      <h2>Personal</h2>

      <div className="personalSection">
        <div className="personalText">
          <h3>🎻 Music</h3>
          <p>
            In addition to studying CS, I am double majoring in <b>Music</b> at Dartmouth.
            On campus, I am a member of the Dartmouth Symphony Orchestra, where I play the <b>viola</b>,
            an instrument I began playing in fourth grade.
          </p>
        </div>

        <div id="musicMedia">
          <iframe
            width="280"
            height="160"
            src="https://www.youtube.com/embed/tUo7kLDjtFQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <img src={img2} alt="default" />

          <img src={img1} alt="default" />
          <iframe
            width="280"
            height="160"
            src="https://www.youtube.com/embed/MTrvcWXZhPQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="personalSection">
        <div className="personalText">
          <h3>👨‍🍳 Cooking</h3>
          <p>
            While I enjoy eating delicious foods, I also enjoy making them as well.
            From Korean to Italian, I enjoy making my go-to dishes, as well as trying out new recipes.
          </p>
          <p>
            Check out some of the dishes I&apos;ve made over the years!
          </p>

        </div>

        <div id="foodPictures">
          {FoodItems.map((food) => {
            return (
              <div className="foodImage">
                <div>
                  <img src={food.img} alt="default" />
                </div>
                <div className="hoverImg">
                  <p>{food.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Personal;
