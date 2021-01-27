import './icon.scss'

const IconComponent = ({ icon, link, size }) => {
    

    return (
        <a href={link}>
            <i className={`com-icon ${icon} ${size}`}> </i>
        </a>
    );
}

export default IconComponent;