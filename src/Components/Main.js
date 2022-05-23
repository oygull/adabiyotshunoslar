import React from 'react'
import Search from './Search'
import Category from './Category'
import data from '../Data'

function Main() {
  return (
    <div>
      <Search/>
      <Category data={data}/>
    </div>
  )
}

export default Main