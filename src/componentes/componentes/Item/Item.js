import { Link } from "react-router-dom";


const Item = ({ id, nombre, image, precio, stock }) => {
    return(
        <div className="overflow-hidden bg-white rounded-lg ">
        <img src={image} alt="" className="p-8 text-center sm:p-9 md:p-7 xl:p-9" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {nombre}
          </h3>
          <div className="flex justify-center">
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              Price: {precio}$
            </p>
            <p className="leading-relaxed mb-2 text-body-color">Stock: {stock}</p>
          </div>
          <Link
            to={`/item/${id}`}
            className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    );
  };
  
  export default Item;

    