import './cartWidget.scss'

const CartWidgetComponent = ({ icon, size }) => {
    return (
        <a>
            <i className={`com-icon ${icon} ${size}`}> </i>
        </a>
    );
}

export default CartWidgetComponent;