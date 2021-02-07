import { useEffect, useState } from 'react'
import './item-list.scss'

const ItemListContainer = (props) => {
    const [product, setProduct] = useState([]); 

    useEffect(() => {
        fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&limit=5000')
        .then(result => {
            return result.json()
        }).then(value => {
            //Guardamos en un state
            setProduct(value);
            console.log(value);
        }).catch(error => {
            console.log(error);
        })
        return () => {}
    },[])


    return (
        <div className="mod-list-items">
            <p></p>
        </div>
    );
}

export default ItemListContainer;