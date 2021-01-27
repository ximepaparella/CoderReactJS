import './title.scss';

const TitleComponent = ({ as, size, weight, children}) => {
    const Element = as || "h4";
    const className = `com-title${` ${size}` || ``} ${weight}`;
  
    return <Element className={className}>{children}</Element>;
  };

export default TitleComponent;