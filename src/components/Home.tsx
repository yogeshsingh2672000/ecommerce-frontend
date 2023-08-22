import React, { useState, useEffect } from "react";
import { getData } from "../hooks/fetchProduct";
import Card from "../library/Card";

function Home() {
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
