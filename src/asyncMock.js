const products = [
 
        {
          id: "1",
          name: "Zapatilla Vans",
          price: 3000,
          color: "negras",
          image: "/image/vansNegras.jpg",
          category: "zapatilla",
          stock: 10,
          description:
            "Zapatilla vans negra, del talle 35 al 40 ",
        },
        {
          id: "2",
          name: "Remera ",
          price: 2000,
          color: "Gray",
          image: "/image/remeraGris.jpeg",
          category: "remera",
          stock: 15,
          description:
            "Remera gris, unico talle",
        },
        {
          id: "3",
          name: " Pantalon",
          price: 2500,
          color: "white",
          image: "/image/pantalonBlanco.jpg",
          category: "pantalon",
          stock: 9,
          description:
            "Pantalon blanco, talle m", 
        },
        {
          id: "4",
          name: "Zapatilla All Star",
          price: 3000,
          color: "White",
          image: "/image/allStar.jpg",
          category: "zapatilla",
          stock: 10,
          description:
            "Zapatilla All Star, del talle 35 al 40 ",
        },
        {
          id: "5",
          name: "Gorra",
          price: 1500,
          color: "black",
          image: "/image/gorra.jpg",
          category: "new",
          stock: 15,
          description:
            "Gorra mujer de aco cuero",
        },
        {
          id: "6",
          name: "All start plataforma",
          price: 4000,
          color: "black",
          image: "/image/Allstar2.jpg",
          category: "zapatilla",
          stock: 15,
          description:
            "All start con plataforma, del talle 35 al 40",
        },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === productCategory));
      }, 500);
    });
  };