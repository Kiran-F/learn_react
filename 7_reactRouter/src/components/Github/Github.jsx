import React from 'react'
import {useLoaderData} from 'react-router-dom'

export function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])

  return (
    <div className='text-center m-5 bg-gray-600 p-4 text-white'>
        Github followers of hiteshchoudhary: {data.followers}
        <img className='text-center' src={data.avatar_url} alt='Github profile picture' width={300} />
    </div>
  )
}



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}