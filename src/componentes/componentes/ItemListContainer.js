import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../db/firebaseConfig';
import { BarLoader } from "react-spinners";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
          LOADING PRODUCTS
        </h1>
        <div className="my-5 flex justify-center">
          <BarLoader color="#111312" height={7} width={100} className="my-5" />
        </div>
      </>
    );
  } else {
    return <ItemList products={products} />;
  }
};

export default ItemListContainer;