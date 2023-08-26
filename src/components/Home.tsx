import React from "react";
import Card from "../library/Card";

function Home(props: any) {
  const { products } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-4 gap-8 px-2">
      {products &&
        products.map((obj: any) => (
          <Card
            key={obj.id}
            id={obj.id}
            title={obj.product_name}
            desc={obj.product_desc}
            category={obj.category}
            image={obj.product_img}
            price={obj.price}
          />
        ))}
    </div>
  );
}

export default Home;
