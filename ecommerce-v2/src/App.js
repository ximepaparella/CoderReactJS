import LogoComponent from './components/logoComponent';
import NavBarComponent from './components/navBar/';
import ItemListContainer from './containers/itemListContainer';
import CartWidgetComponent from './components/cartWidget'
import './components/header.scss'
import ItemDetailContainer from './containers/itemDetailContainer';

function App() {
  return (
    <div className="App">
      
      <header className="mod-header">
           <div className="row">
               <div className="col-2">
                  <LogoComponent link="http://google.com.ar" size="--s" img="/images/logo-retina.png" />
               </div>
               <div className="col-8">
                   <NavBarComponent />
               </div>
               <div className="col-2">
                  <CartWidgetComponent size="--s" icon="fi fi-rr-shopping-cart" />
               </div>
           </div>
        </header>
        <main>
          <ItemDetailContainer />
        </main>
    </div>
  );
}

export default App;
