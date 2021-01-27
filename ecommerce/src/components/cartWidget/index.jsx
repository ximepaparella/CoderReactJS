import './cart.scss'
import '../icon/icon.scss'

const CartWidgetComponent = ({ icon, size }) => {

    function addToCart() {
        alert("Agregado al Carrito. Agregar class active al div mod-cart-sidebar para ver el sidebar del cart desplegado.")
    }

    return (
        <a>
            <i onClick={addToCart} className={`com-icon ${icon} ${size}`}> </i>
        </a>
    );
}

export default CartWidgetComponent;