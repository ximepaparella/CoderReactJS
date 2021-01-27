import './logo.scss'

const LogoComponent = ({link, img, size}) => {
  return (
    <>  
        <div className="com-logo {size}">
            <a href={link}>
                <img src={img} />
            </a>
        </div>
    </>
  );
}

export default LogoComponent;