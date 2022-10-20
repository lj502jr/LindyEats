import React, { useEffect, useState } from 'react'

const GetData = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

    {(typeof backendData.recipes === 'undefined') ? (
      <p>Loading...</p>
    ): (
      backendData.recipes.map((recipe, i) => (
        <p key={i}>{recipe}</p>
      ))
    )}

    </div>
  )
}

export default GetData
