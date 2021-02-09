
import './itemList.scss'
import ItemComponent from './../item/'

const ItemListComponent = ({productos}) => {
  return (
     <div className="row-gap-tablet-4 row-gap-2">
        {productos.map( (elemento, index) => {return <ItemComponent key={index} props={elemento}/>})}
     </div>
  );
}

export default ItemListComponent;