import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import avatar from '../components/images/avatar.png';

export default function Pillars() {
  const cardData = [
    {
      type: 'Card1',
      image: avatar,
      name: 'Name 1',
      designation: 'Designation 1',
      para: 'Description for Card 1',
    },
    {
      type: 'Card2',
      image: avatar,
      name: 'Name 2',
      designation: 'Designation 2',
      para: 'Description for Card 2',
    },
    {
      type: 'Card1',
      image: avatar,
      name: 'Name 3',
      designation: 'Designation 3',
      para: 'Description for Card 3',
    },
    {
      type: 'Card2',
      image: avatar,
      name: 'Name 4',
      designation: 'Designation 4',
      para: 'Description for Card 4',
    },
  ];

  return (
<div className="pillars px-4 sm:px-20">
      <div className="text-center pt-12">
        <h1 className="text-xl sm:text-lg font-semibold">Lorem Ipsum</h1>
        <h2 className="text-4xl sm:text-3xl mt-1 font-bold">OUR PILLARS</h2>
      </div>

      <div className="flex flex-col sm:flex-row mt-4 sm:mt-12 justify-center flex-wrap">
        {cardData.map((card, index) => {
          if (card.type === 'Card1') {
            return (
              <Card1
                key={index}
                image={card.image}
                name={card.name}
                designation={card.designation}
                para={card.para}
              />
            );
          } else if (card.type === 'Card2') {
            return (
              <Card2
                key={index}
                image={card.image}
                name={card.name}
                designation={card.designation}
                para={card.para}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
