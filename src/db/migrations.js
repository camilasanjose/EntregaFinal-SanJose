import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import data from "./seedData.json";

const productsCollection = collection(db, "products");

data.forEach((product) => {
  addDoc(productsCollection, product)
    .then((result) => {
      console.log(result);
      return console.log("product added");
    })
    .catch((error) => {
      console.error(error);
      return console.log("Error adding product");
    });
});