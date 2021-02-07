import ItemCountComponent from "../../components/itemCount"

const ItemListContainer = ({greetings}) => {
    return (
        <div className="mod-list-items">
            <p>{greetings}</p>
            <ItemCountComponent initial="4" stock="100000" />
        </div>
    );
}

export default ItemListContainer;