import React from 'react'

const SingleDrinksPage = ({params}:{params:{drinksId:string}}) => {
  return (
    <div>
        Single Drinks Page
        <br />
        {params.drinksId}
    </div>
  )
}

export default SingleDrinksPage