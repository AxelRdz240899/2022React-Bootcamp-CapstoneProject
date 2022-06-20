import { Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from 'Pages/MainPage/Index';
import ProductListPage from 'Pages/ProductListPage/Index';
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <>
      {/* Header */}
      <Header />
      <Routes>
        {/* Home */}
        <Route path='/' element={<MainPage />} />
        {/* Lista de productos */}
        <Route path='/products' element={<ProductListPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
