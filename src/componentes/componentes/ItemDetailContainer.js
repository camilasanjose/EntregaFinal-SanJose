import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { BarLoader } from "react-spinners";
import { getDoc, doc} from "firebase/firestore";
import { db } from '../../db/firebaseConfig';



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
          CARGANDO PRODUCTOS...
        </h1>
        <div className="my-5 flex justify-center">
          <BarLoader color="#111312" height={7} width={100} className="my-5" />
        </div>
      </>
    );
  } else {
    return (
      <div>
        <ItemDetail {...product} />
      </div>
    ); 
  }
};

export default ItemDetailContainer;