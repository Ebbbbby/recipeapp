import React from 'react'
import { Outlet } from 'react-router-dom'



const RecipeLayout = () => {
  return (
    <div>
        <h1>Recipe Layout</h1>

        <Outlet/>

    </div>
  )

}

export default RecipeLayout;