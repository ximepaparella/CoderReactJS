import './logo.scss'

const LogoComponent = ({ link, img, size }) => {
  return (
      <a href={link}>
        <img className={`com-logo ${size}`} src={img} />
      </a>
  );
}

export default LogoComponent;