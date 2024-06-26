import './App.css'
import Header from '../../component/header/Header.jsx';
import Banner from '../../component/banner/banner.jsx';

export default function App(){
  return (
    <>
      <Header/>

      <main className='content'>
        <Banner/>
      </main>
    </>
  );
}