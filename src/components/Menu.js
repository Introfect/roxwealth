import React, { useEffect, useState } from 'react'
import {data} from "../data"
import Card from './Card';


const getRandomImage = () => {
    // Use Unsplash Source for random food images
    const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
    return `https://source.unsplash.com/collection/953316/300x200/?food=${randomImageNumber}`;
  };
const MenuItemCard = ({ item }) => (
    <div className="bg-white shadow-md p-4 rounded-md mb-4">
    <img src={getRandomImage()} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
    <p className="text-gray-600 mb-2">{item.description}</p>
    <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
    <p className="text-gray-700">Ingredients: {item.ingredients.join(', ')}</p>
    <p className="text-gray-700">Nutritional Info: {JSON.stringify(item.nutritional_info)}</p>
    <p className="text-gray-700">Seasonal Availability: {item.seasonal_availability.join(', ')}</p>
    {item.customizable_options && (
      <p className="text-gray-700">Customizable Options: {item.customizable_options.join(', ')}</p>
    )}
  </div>
  );

const Menu = ({menu}) => {
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
    // <div>
 
    //     <div className='flex-flex-col justify-center items-center space-y-5'>   
    //         <div class="grid place-items-center">
    //     <h1 className='text-3xl font-bold sm:text-4xl mb-10'>Menu</h1>
    //     <div class="grid w-[20 rem] grid-cols-2 gap-1 rounded-md bg-orange-200 p-2">
    //       <div onClick={() => setMenu(1)}>
    //         <input
    //           type="radio"
    //           name="option"
    //           id="1"
    //           value="1"
    //           class="peer hidden"
    //           checked
    //         />
    //         <label
    //           for="1"
    //           class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
    //         >
    //           All Year
    //         </label>
    //       </div>

    //       <div onClick={() => setMenu(2)}>
    //         <input
    //           type="radio"
    //           name="option"
    //           id="2"
    //           value="2"
    //           class="peer hidden"
    //         />
    //         <label
    //           for="2"
    //           class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
    //         >
    //           Seasonal
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    //       {allYear &&
    //         menu === 1 ?
    //         <div class="grid place-items-center">
    //     <div class="grid w-[20 rem] grid-flow-col  gap-1 rounded-md bg-orange-200 p-2">
    //         {allYear.map((item) => {
                
    //           return (
    //             <div onClick={() => {
    //                 setInternalMenu(1)

    //                 }}>
    //               <input
    //                 type="radio"
    //                 name="option"
    //                 id="4"
    //                 value="1"
    //                 class="peer hidden"
    //                 checked
    //               />
    //               <label
    //                 for="4"
    //                 class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
    //               >
    //                 {item.name}
    //               </label>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>:null}
    //   {seasonal &&
    //     menu === 2?
    //   <div class="grid place-items-center">
    //     <div class="grid w-[20 rem] grid-flow-col gap-1 rounded-md bg-orange-200 p-2">
    //     {seasonal.map((item) => {
    //       return (
    //         <div onClick={() => {
    //             setInternalMenu(2)
    //             console.log("nnn")
    //             }}>
    //         <input
    //           type="radio"
    //           name="option"
    //           id="3"
    //           value="3"
    //           class="peer hidden"
    //           checked
    //         />
    //         <label
    //           for="3"
    //           class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
    //         >
    //           {item.name}
    //         </label>
    //       </div>
    //       )
    //     })}
    //     </div>
    //     </div>:null}
      

    //     </div>
    //     <Card data={menu===2?seasonal:allYear}/>
    // </div>
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Food Menu</h1>
    {menu.categories.map((category) => (
      <div key={category.name} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    ))}
    {menu.seasonal_menu && (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{menu.seasonal_menu.name}</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {menu.seasonal_menu.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    )}
  </div>
  );
}

export default Menu