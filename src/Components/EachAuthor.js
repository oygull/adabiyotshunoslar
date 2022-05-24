import React from 'react'
import { useLocation } from "react-router-dom";
import data from '../Data';

function EachAuthor() {
  let location = useLocation();
  return (
    <div>
      {data.map((el) => {
        if (el.id === +location.pathname.split("/").at(-1)) {
          return (
            <div className='author'>
              <div className='container'>
                 <div className='author__inner'>
                  <img className='author__img' src={el.img}/>
                  <div className='inner__desc'>
                    <h2 className='author__title'>{el.name} {el.lastName}</h2>
                    <p className='author__text'>{el.desc}</p>
                  </div>
                 </div>
              </div>
            </div>
          )
        }
      })}

    </div>
  )
}

export default EachAuthor