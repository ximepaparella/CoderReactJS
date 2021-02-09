import './item.scss'

const ItemComponent = ({props}) => {
  return (
     <>
     <article className="product">
        <div className="product__media">
          <img src={props.pictureUrl} />
        </div>
        <div className="product__info">
          <h2>{props.title}</h2>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
        </div>
     </article>
     </>
  );
}

export default ItemComponent;