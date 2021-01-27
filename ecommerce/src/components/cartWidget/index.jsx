import './cart.scss'
import '../icon/icon.scss'

const CartWidgetComponent = ({ icon, size }) => {

    function addToCart() {
        let element = document.getElementsById("cart-sidebar");
        element.classList.add("active")
    }

    return (
        <a>
            <i onClick={addToCart} className={`com-icon ${icon} ${size}`}> </i>
        </a>
    );
}

export default CartWidgetComponent;