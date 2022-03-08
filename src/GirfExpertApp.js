import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GirfExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
        <h2>GirfExpertApp</h2>
        <hr />
        <AddCategory setCategories={setCategories}/>

        <ol>
          {
            categories.map( c => (
              <GifGrid
                category={c}
                key={c}
              />
            ))
          }

        </ol>

    </div>
  )
}
