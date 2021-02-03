import { useState } from 'react';
import './product-card.scss'

const ProductContainer = () => {
    const [qty, setQty] = useState(1); 

    function plusQty () {
        setQty(qty + 1);  
    }

    function minusQty () {
        if(qty >= 1) {
            setQty(qty - 1);
        }
    }

    return (
        <div className="mod-product-card">
            <div className="product-image">
                <img src="/images/product/product-1.jpg" />
            </div>
            <div className="product-info">
                <a className="product-name l --semi-bold" href="">Nombre Producto</a>
                <span className="product-price ">$1.500</span>
            </div>
            <div className="com-quantity">
                    <input type="number" value={qty}></input>
                    <div>
                        <button onClick={plusQty}>+</button>
                        <button onClick={minusQty}>-</button>
                    </div>
                </div>
        </div>
    );
}

export default ProductContainer;