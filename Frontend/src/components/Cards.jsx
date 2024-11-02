import React from 'react'

function Cards({item}) {

    
  return (
    <>
    
    <div>
    <div className="card bg-base-100 w-96 shadow-xl ml-4 hover:scale-105 duration:200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:text-pink-500 duration-200">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
