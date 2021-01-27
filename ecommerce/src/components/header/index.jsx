import LogoComponent from '../logo/'

import './header.scss'

const HeaderComponent = () => {
    return (
        <header className="mod-header">
           <div className="row">
               <div className="col-3">
                   <LogoComponent link="http://google.com.ar" img="/images/logo-retina.png" />
               </div>
               <div className="col-7">
                   Menu
               </div>
               <div className="col-2">
                   Actions
               </div>
           </div>
        </header>
    );

}

export default HeaderComponent;