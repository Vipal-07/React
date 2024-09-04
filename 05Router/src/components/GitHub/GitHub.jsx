import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Nightrider0098')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div>
      GitHub Follower : {data.followers}
    </div>
  )
}

export default GitHub
