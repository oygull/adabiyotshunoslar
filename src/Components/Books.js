import React from 'react'
import Book from './Book'

function Books({el}) {
  return (
    <div className='books'>
      <h2 className='books__title'>Asarlari</h2>
        <ul className='books__list'>
          {el.bookObj.map((item,i)=>{
            return(
              <Book key={i} item={item}/>
            )
          })}
        </ul>
    </div>
  )
}

export default Books