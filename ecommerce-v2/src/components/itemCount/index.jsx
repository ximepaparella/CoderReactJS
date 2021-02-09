import { useState } from 'react';
import './itemCount.scss'
import './../button.scss'

const ItemCountComponent = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial); 
   
    function onAdd() {
        alert("Agregado al carrito!")
    };

    function plusQty () {
        if(qty < stock ) {
            setQty(qty + 1);  
        } else {
            alert("no hay más stock disponible");
        }
    }

    function minusQty () {
        if(qty >= 1) {
            setQty(qty - 1);
        }
    }

    return (
            <div className="mod-item-count">
                <div className="com-quantity">
                    <span>{qty}</span>
                    <div>
                        <button onClick={plusQty}>+</button>
                        <button onClick={minusQty}>-</button>
                    </div>
                </div>
                <button onClick={onAdd} className="com-button --primary">Añadir al carrito</button>
        </div>
    )
};

export default ItemCountComponent;