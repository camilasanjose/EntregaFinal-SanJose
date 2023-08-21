import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../../asyncMock";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
      <h1 className="text-center pt-4 text-5xl bg-[#F3F4F6]">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;