
import HeaderComponente from './components/header/'
import CartContainer from './containers/cart/'
import ProductContainer from './containers/productContainer'


// definir como arrow function
const App = () => {
  return (
    <>
      <section>
        <section className="wrapper">
          <HeaderComponente />

          <main>
            <div className="row-gap-4">
              <ProductContainer />
              <ProductContainer />
              <ProductContainer />
              <ProductContainer />
            </div>
          </main>

          <footer>
            Copyright React Js 2021.
          </footer>
        </section>

        <CartContainer />

      </section>
    </>
  );
}

export default App;
