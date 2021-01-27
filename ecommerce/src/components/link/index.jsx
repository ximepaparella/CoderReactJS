import './link.scss'

const LinkComponent = (link, className, text) => {
    return (
        <a href={link} className={className}>{text}</a>
    ); 
}

export default LinkComponent;