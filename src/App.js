import Banner from "./components/layout-components/Banner";
import Footer from "./components/layout-components/Footer";
import Header from "./components/layout-components/Header";
import Menu from "./components/layout-components/Menu";
import Products from "./components/layout-components/Products";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Menu />
        <Products />  
      </main>
      <Footer />
    </div>
  );
}

export default App;
