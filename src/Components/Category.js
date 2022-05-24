import React, { useEffect, useState } from 'react'
import Autors from './Autors';


function Category({data}) {
  
  const[objArr, setObjArr]=useState(data);
  const[newArr, setNewArr]=useState([]);

  useEffect(() => {
    allFunc()
  },[])
  const allFunc=()=>{
    setNewArr(objArr)
  }
  const temuriyFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='temuriy'))
  }
  const jadidFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='jadid'))
  }
  const sovetFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='sovet'))
  }
  const mustaqillukFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='mustaqillik'))
  }

  return (
    <div className='category'>
        <div className='category-box'>
          <button onClick={allFunc} autoFocus className='category-btn'>All</button>
          <button onClick={temuriyFunc} className='category-btn'>Temuriylar davri </button>
          <button onClick={jadidFunc} className='category-btn'>Jadid adabiyoti </button>
          <button onClick={sovetFunc} className='category-btn'>Sovet adabiyoti </button>
          <button onClick={mustaqillukFunc} className='category-btn'>Mustaqillik davri</button>
        </div>
        <div className='autors'>
          <div className='container'>
              <ul className='autors__list'>
                {newArr.map((el,i)=>{
                  return  <Autors el={el} key={i}/>
                })}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Category