import React from 'react'
import { useLocation } from "react-router-dom";

function EachAuthor({newObj}) {
  let location = useLocation();
  return (
    <div>
      {newObj.map((el) => {
        if (el.id === location.pathname.split("/").at(-1)) {
          return <h1>{el.name}</h1>;
        }
      })}

    </div>
  )
}

export default EachAuthor