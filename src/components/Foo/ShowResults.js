import React from "react";


const ShowResults = (hits) => {

  Object.values(hits).map((hit) =>
    console.log(hits)
)

  return (
   <div>
     {
       Object.values(hits).map((hit) =>
         <div>{hit.title}</div>
       )
     }
   </div>
  )
}

export default ShowResults;