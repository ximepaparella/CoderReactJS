import ItemCountComponent from "../itemCount"

const ItemDetailComponent = ({productoDetalle}) => {
    function onAdd() {
        alert("Agregado al carrito!")
    };

  return (
     <div className="item-detail">
         <img src={productoDetalle.pictureUrl} />
         <h2>{productoDetalle.title}</h2>
         <p>{productoDetalle.description}</p>
         <span>{productoDetalle.price}</span>

         <ItemCountComponent stock={100} initial={1} onAdd={onAdd} />
     </div>
  );
}

export default ItemDetailComponent;