import { useEffect, useState } from 'react';
import ItemDetailComponent from '../../components/itemDetail';

const ItemDetailContainer = (props) => {
    const dataProductos = [
        {id: 1, title: 'Zapatillas Nike', description: 'Descripción del producto', price:2500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 2, title: 'Remera Adidas', description: 'Descripción del producto', price:3000, pictureUrl: "https://picsum.photos/200/300"},
        {id: 3, title: 'Botines de Messi', description: 'Descripción del producto', price:2000, pictureUrl: "https://picsum.photos/200/300"},
        {id: 4, title: 'Short Adidas Basquetball', description: 'Descripción del producto', price:5500, pictureUrl: "https://picsum.photos/200/300"},
        {id: 5, title: 'Camiseta River Plate', description: 'Descripción del producto', price:1500, pictureUrl: "https://picsum.photos/200/300"}
    ];
    const id = 1;
    const [productoDetalle, setProductoDetalle] = useState([]); 
    useEffect(() => {
      const getProductoDetalle = new Promise ((resolve) => {
        setTimeout(function(){
          resolve(dataProductos)}, 3000);
        
      });
      getProductoDetalle.then(function(resultado) {
          let detalle = resultado.find(x => {return x.id == id})
          setProductoDetalle(detalle)
      });
    });
    return (
        <div className="item-detail-container">
            <ItemDetailComponent productoDetalle={productoDetalle}/>
        </div>
    );
}

export default ItemDetailContainer;