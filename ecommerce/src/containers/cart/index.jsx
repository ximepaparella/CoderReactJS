import './cart-sidebar.scss'
import TitleComponent from '../../components/title/'
import ItemListContainer from '../../containers/itemListContainer/'

const CartContainer = () => {
    return (
        <section className="mod-cart-sidebar" id="cart-sidebar">
            <TitleComponent as="h3" size="xl" weight="--bold">Mi carrito</TitleComponent>
            <ItemListContainer greeting="No hay productos en el carrito" />
        </section>
    );
}

export default CartContainer;