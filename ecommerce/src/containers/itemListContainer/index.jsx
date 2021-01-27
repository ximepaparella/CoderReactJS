import './item-list.scss'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="mod-list-items">
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;