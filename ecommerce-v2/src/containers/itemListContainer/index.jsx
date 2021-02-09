import ItemCountComponent from "../../components/itemCount"
import ItemListComponent from "../../components/itemList";

import { useEffect, useState } from 'react';

const ItemListContainer = (props) => {
    const dataProductos = [
        {id: 1, title: 'Producto 1', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 2, title: 'Producto 2', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 3, title: 'Producto 3', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 4, title: 'Producto 4', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 5, title: 'Producto 5', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"}
    ];

    const [productos, setProducto] = useState([]); 
    useEffect(() => {
      const Promesa = new Promise ((resolve) => {
        setTimeout(function(){
          resolve(dataProductos)}, 3000);
        
      });
      Promesa.then(resolve => {setProducto(resolve)});
    });
    return (
        <div className="mod-list-items">
            <ItemListComponent productos={productos} />
            <ItemCountComponent initial="4" stock="100000" />
        </div>
    );
}

export default ItemListContainer;