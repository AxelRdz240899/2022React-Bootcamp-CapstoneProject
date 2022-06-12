import './App.css';
import { MainPage } from './Pages/MainPage';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <MainPage/>
  );
}

export default App;
