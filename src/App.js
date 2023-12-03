

import { Header } from './components/Header';
import Menu from './components/Menu';
import { useQuery } from '@tanstack/react-query';
import { Nav } from './components/Nav';
import Map from "./components/Map"
import ChefAwards from './components/ChefAwards';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import axios,{AxiosError} from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [dataset,setDataset]=useState()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/restaurant');
        console.log(response,"djend")
        response && setData(response.data);
        console.log(data,"emd")
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Axios Error:', error.response.status, error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Request setup error:', error.message);
        }
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className='bg-orange-100'>
      
        <Nav/>
        <Header amb={data.ambiance.description} name={data.name}/>
        {/* <BestSellers/> */}
        <Menu menu={data.menu}/>
        {/* <FoodMenu menu={data.restaurant.menu}/> */}
        <ChefAwards chefs={data.chef} awards={data.awards}/>
        <Map locations={data.location}/>
        <Reviews review={data.reviews}/>
        <Footer/> 
    </div>
  );
}

export default App;
