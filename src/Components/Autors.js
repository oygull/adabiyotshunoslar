import React from 'react'
import { Link } from 'react-router-dom'
import book from '../images/book.png'
import headphones from '../images/headphones.png'


function Autors({el,i}) {
  return (
    <Link className='list__link' to={`/eachauthor/${el.id}`}>
      <li key={i}  className='authors__item'>
            <div className='imgbox'>
              <img src={el.img}/>
            </div>
            <div className='authors__desc'>
              <h3 className='authors-title'>{el.name} {el.lastName}</h3>
              <p className='author__year'>{el.born}-{el.died}</p>
              <div className='desc__inner'>
                <p className='author__par author__par-r'> <img className='author__icon' src={book}/> {el.books}</p>
                <p className='author__par'> <img className='author__icon' src={headphones}/> {el.audio}</p>
              </div>
            </div>
          </li>
    </Link>
   
  )
}

export default Autors