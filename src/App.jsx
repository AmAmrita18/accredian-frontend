import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TopBanner from './TopBanner';

function App() {

  return (
    <>
    <TopBanner/>
    <Header/>
     <Outlet />  
     <Footer/> 
    </>
  )
}

export default App
