import React, { useEffect, useState } from 'react'
import {data} from "../data"
import Card from './Card';


const MenuItemCard = ({ item }) => (
    <div className="w-72 mx-8 my-6   bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt={item.name}
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Available</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${item.price.toFixed(2)}</p>
          <span className="text-gray-400 mx-3   uppercase text-xs">{item.description}</span>
          <div className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </div>
  );

const Menu = ({menu}) => {
    const [showMenu,setShowMenu]=useState(1)
    const [allYear,setAllYear]=useState([]);
    // const [menu,setMenu]=useState(1)
    const[internamMenu,setInternalMenu]=useState(0)
    const [seasonal,setSeasonal]=useState([])

useEffect(()=>{
        const allYearFood=data && data.restaurant.menu.categories.filter(item=>item);
        allYearFood && setAllYear([...allYearFood])

        const seasonalFood=data && data.restaurant.menu.seasonal_menu.items.filter(item=>item);
        seasonalFood && setSeasonal([...seasonalFood])
       
        
    },[])
  return (
    <div id="menu" className=" justify-center items-center mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Food Menu</h1>

    <fieldset class="flex flex-wrap gap-3">
  <legend class="sr-only">Color</legend>
  <div>
    <input
      type="radio"
      name="ColorOption"
      value="ColorBlack"
      id="ColorBlack"
      class="peer hidden"
      checked
    />
    <label
    onClick={()=>setShowMenu(1)}
      for="ColorBlack"
      class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900  peer-checked:bg-red-500 peer-checked:text-white"
    >
      <p class="text-sm font-medium">All year menu</p>
    </label>
  </div>

  <div>
    <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="peer hidden" />

    <label
     onClick={()=>setShowMenu(2)}
      for="ColorRed"
      class="flex cursor-pointer items-center border-red-500 justify-center rounded-md border  bg-white px-3 py-2 text-gray-900   peer-checked:bg-red-500 peer-checked:text-white"
    >
      <p class="text-sm font-medium">Seasonal</p>
    </label>
  </div>

</fieldset>


{
    showMenu===1?
    <div className='flex flex-wrap justify-evenly items-center'>
    {menu.categories.map((category) => (
        <div key={category.name} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
        <div className="flex flex-row md:flex-col items-center justify-center">
          {category.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
              ))}
        </div>
      </div>
    ))}
    </div>:null
}
{
    showMenu===2?

    <div className='flex flex-col justify-center items-center'>
    {menu.seasonal_menu && (
        <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{menu.seasonal_menu.name}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {menu.seasonal_menu.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
              ))}
        </div>
      </div>
    )}
    </div>:null
}
  </div>
  );
}

export default Menu