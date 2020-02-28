import React from 'react';
import Animation from './animation';
import data from './data';


function MyStory () {
  return (
    <div className="container-fluid text-black-50">
      {data.map((item, index) => (
        <Animation
          index={index}
          aosDataImg={item.aosDataImg}
          aosDataText={item.aosDataText}
          h3={item.h3}
          h4={item.h4}
          img={item.img}
          srcImg={item.srcImg}
          textElement={item.textElement}
        />
      ))}
    </div>
  );
}

export default MyStory;
