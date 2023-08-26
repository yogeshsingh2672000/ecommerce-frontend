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
    <div className="bg-[#031123] text-white card_hover max-w-sm rounded-xl overflow-hidden shadow-lg h-full w-full hover:scale-105 transition-all ease-in-out">
      <img
        className="w-full h-[200px] rounded-[30px] hover:scale-105 transition-all ease-in-out shadow-xl"
        src={image}
        alt="img"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base h-[60px]">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
          {category}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
          ₹{(parseFloat(price.replace("$", "")) * 10).toFixed(2)}
        </span>
        <span className="inline-block line-through bg-yellow-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          ₹
          {(
            parseFloat(price.replace("$", "")) * 10 +
            parseFloat(price.replace("$", "")) * 1.5
          ).toFixed(2)}
        </span>
        <button className="w-full my-2 h-[50px] rounded py-[4px] px-2 text-center bg-[#A084E8] text-white mr-2 mb-2">
          View more
        </button>
      </div>
    </div>
  );
}

export default Card;
