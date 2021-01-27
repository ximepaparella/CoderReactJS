import LogoComponent from '../logo/'
import NavBarComponent from '../navbar/'
import CartWidgetComponent from '../cartWidget/'
import WishlistComponent from '../wishlistWidget/'

import './header.scss'

const HeaderComponent = () => {
    return (
        <header className="mod-header">
           <div className="row">
               <div className="col-3">
                   <LogoComponent link="http://google.com.ar" size="--s" img="/images/logo-retina.png" />
               </div>
               <div className="col-6">
                   <NavBarComponent />
               </div>
               <div className="col-3">
                   <div className="mod-actions --just-end">
                        <CartWidgetComponent size="--s" icon="fi fi-rr-shopping-cart" />
                        <WishlistComponent size="--s" icon="fi-rr-heart" />
                   </div>
               </div>
           </div>
        </header>
    );

}

export default HeaderComponent;