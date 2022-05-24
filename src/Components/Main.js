import React from 'react'
import Search from './Search'
import Category from './Category'
import data from '../Data'
import Slider from './Slider'

function Main() {
  return (
    <div>
       <Slider/>
      <Search/>
      <Category data={data}/>
    </div>
  )
}

export default Main