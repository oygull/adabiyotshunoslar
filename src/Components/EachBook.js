import React from 'react'
import { Link, useLocation } from "react-router-dom";
import data from '../Data';

function EachBook({setNewArr}) {
  let location = useLocation();
  let myArr = []
  const addElement =(elId)=>{
    data.map((el)=>{
      el.bookObj.map((item)=>{
        if(elId===item.bookId)
            myArr.push(item)
      })
    })
   setNewArr(myArr)
  }
  return (
    <div>
      {data.map((el) => {
        return  el.bookObj.map((item,i)=>{
            if (item.bookId === location.pathname.split("/").at(-1)){
              return (
              <div className='asarlar' key={i}>
                  <div className='container'>
                  <div  className='asarlar__inner'>
                      <div className='asarlar__imgbox'>
                        <img src={item.bookImg}/>
                      </div>
                      <div className='asarlar__desc'>
                        <h3 className='asar__title'>{item.bookName}</h3>
                        <Link className='list__link' to={`/eachauthor/${el.id}`}> <p className='book-author'>{el.name} {el.lastName} <i className='bx bxs-star'></i> {item.bookRating}</p></Link>
                        <p className='asarlar__par'>Sahfalar soni: <span>{item.bookPage}</span> </p>
                        <p className='asarlar__par'>Chop etilgan <span>{item.published}</span> </p>
                        <p className='asarlar__par'>Janri: <span> {item.bookGenre}</span> </p>
                        <p className='asarlar__par'>Nashriyot: <span> {item.nashriyot}</span> </p>
                        <p className='asarlar__text'>{item.bookInfo} {item.bookInfoTwo}</p>
                        <button onClick={()=>{addElement(item.bookId)}} className='add-btn'>Javonga qo'shish</button>
                      </div>
                   </div>
                  </div>
              </div>
              )
            }
          })
      })}

    </div>
  )
}

export default EachBook;