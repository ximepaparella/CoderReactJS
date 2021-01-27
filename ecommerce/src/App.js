
import HeaderComponente from './components/header/'
import CartContainer from './containers/cart/'


// definir como arrow function
const App = () => {
  return (
    <>
      <section>
        <section className="wrapper">
          <HeaderComponente />

          <main>
            main component
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
