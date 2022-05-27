import Search from './Search'
import Category from './Category'
import Slider from './Slider'
import React, {useState } from 'react'
import data from '../Data'

function Main() {

  const[objArr, setObjArr]=useState(data);
  const[newArr, setNewArr]=useState([]);

  return (
    <div>
       <Slider/>
      <Search setNewArr={setNewArr}/>
      <Category setNewArr={setNewArr} newArr={newArr} objArr={objArr}/>
    </div>
  )
}

export default Main