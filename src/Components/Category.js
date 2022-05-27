import React, { useEffect} from 'react'
import Autors from './Autors';


function Category({setNewArr,newArr,objArr}) {
  


  useEffect(() => {
    allFunc()
  },[])
  const allFunc=()=>{
    setNewArr(objArr)
  }
  const jadidFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='Diniy'))
  }
  const temuriyFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='jahon'))
  }
  const sovetFunc=()=>{
    setNewArr(objArr.filter(el=>el.genre==='biznes'))
  }
  const myFunc3=()=>{
    setNewArr(objArr.filter(el=>el.genre==="o'zbek"))
  }

  return (
    <div className='category'>
      <h1 className='category__heading'>Asosiy kategoriyalar</h1>
        <div className='category-box'>
          <button onClick={allFunc} autoFocus className='category-btn'>All</button>
          <button onClick={jadidFunc} className='category-btn'>Diniy </button>
          <button onClick={temuriyFunc} className='category-btn'>Jahon </button>
          <button onClick={sovetFunc} className='category-btn'>Biznes</button>
          <button onClick={myFunc3} className='category-btn'>O'zbek</button>
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