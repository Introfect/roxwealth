
import Card from './components/Card';
import { Header } from './components/Header';
import Menu from './components/Menu';
import { Nav } from './components/Nav';
import {data} from "./data"
import Map from "./components/Map"
import ChefAwards from './components/ChefAwards';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BestSellers from './components/BestSellers';

function App() {
  return (
    <div className='bg-orange-100'>

    <div className="mx-auto px-20">
      <Nav/>
      <Header amb={data.restaurant.ambiance.description} name={data.restaurant.name}/>
      {/* <BestSellers/> */}
      <Menu menu={data.restaurant.menu}/>
      <ChefAwards chefs={data.restaurant.chef} awards={data.restaurant.awards}/>
      <Map locations={data.restaurant.location}/>
      <Reviews review={data.restaurant.reviews}/>
      <Footer/>

    </div>
  
    </div>
  );
}

export default App;
