import React from 'react';

import FoodItems from './FoodItems';

const Personal = () => {
  return (
    <section data-index="5" id="personal">
      <h2>Personal</h2>
      <h3>Music</h3>
      <p>Text goes here about music</p>

      <div id="cooking">
        <div id="cookingText">
          <h3>👨‍🍳 Cooking</h3>
          <p>I enjoy cooking delicious foods. Check out some of the
            dishes I&apos;ve made over the years!
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
