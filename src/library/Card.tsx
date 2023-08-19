import React from "react";

interface CardProps {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
  price: string;
}

function Card(props: CardProps) {
  const { id, title, desc, image, category, price } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full hover:scale-105 transition-all ease-in-out">
      <img
        className="w-full rounded-[30px] hover:scale-105 transition-all ease-in-out shadow-xl"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      </div>
    </div>
  );
}

export default Card;
