import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "Pages/MainPage/Index";
import ProductListPage from "Pages/ProductListPage/Index";
import ProductPage from "Pages/ProductPage/Index";
import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { Content } from "Styles/Content";
import SearchPage from "Pages/SearchPage/Index";
function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <Content>
        <Routes>
          {/* Home */}
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          {/* Lista de productos */}
          <Route path="/products" element={<ProductListPage />} />
          {/* Pagina de producto */}
          <Route path="/product/:productId" element={<ProductPage />} />
          {/* Pagina de busqueda de producto */}
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Content>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
