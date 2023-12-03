import React from 'react'
import Chef from './Chef'
import Awards from './Awards'

const ChefAwards = ({chefs,awards}) => {
  return (
    <div>
        <div className='grid grid-flow-col'>
    <Chef chef={chefs}/>
        </div>
        <div>
            <Awards awards={awards}/>
        </div>

</div>
  

  )
}

export default ChefAwards