import './Home.css'
import Header from '../../component/header/Header.jsx';
import Banner from '../../component/banner/banner.jsx';
import Promo from '../../component/promo/Promo.jsx';
import Categories from '../../component/categories/Categories.jsx';

export default function Home(){
  return (
    <>
      <Header/>
      <main className='content'>
        <Banner/>
        <Promo/>
        <Categories/>
      </main>
    </>
  );
}