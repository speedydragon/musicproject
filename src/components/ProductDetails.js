import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className="flex items-center m-40 p-5 border border-solid border-silver bg-white rounded">
            <img className="w-97" src={image} alt="product" />
            <div className="text-left ml-8 p-5 border border-solid border-silver rounded">
                <h3 className="text-primaryblue mt-5 mb-8 font-semibold">{title}</h3>
                <p className="text-darkgray mb-8">{description}</p>
                <p className="text-darkgray font-bold mb-12"><span className="text-orange-400 font-1.125rem">Category:</span> {category}</p>
                <div className="flex items-center justify-between">
                    <span className="inline-block bg-green-600 py-2 px-4 text-white font-bold rounded-md mb-5 shadow-lg">{price} $</span>
                    <Link className="inline-block bg-primaryblue py-2 px-4 text-white font-bold rounded-md mb-5 transition-all duration-200 ease-out hover:bg-sky-800 shadow-lg" to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;