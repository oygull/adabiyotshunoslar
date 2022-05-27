import React from 'react'
import searchHeading from '../images/qidirish.png'
import searchIcon from '../images/search-icon.png'
import data from '../Data'

function Search({setNewArr}) {

  let newArr =[]
  const searchHandler =(e)=> {

    data.forEach((item, i)=> {
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || item.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())  ){
        newArr.push(item)
      }

    })
    setNewArr(newArr)


  }

  return (
    <div className='container'>
      <div className='search__box'>
          <img className='search__heading' src={searchHeading}/>
          <form className='search__form'>
            <input onChange={searchHandler} className='search__input' type='text' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
            <button className='search__btn'> <img className='search-icon' src={searchIcon}/> Izlash</button>
          </form>
      </div>
    </div>
  )
}

export default Search