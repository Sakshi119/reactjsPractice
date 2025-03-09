import {React,useState} from 'react'
import './imageSearch.css'

function ImageSearch() {
const [search,setSearch] = useState();
const [data,setData] = useState([]);
let API_KEY = "EVyRarXlZhZKqifEbpXeNRl8r5P8yiNzBrra6I5zO9M"
//API =  https://api.unsplash.com/photos/users/ashbot/likes?page=1&query=${searchValue}&client_id=${API_KEY}
const handleSearch = (event)=>{
    setSearch(event.target.value);
    console.log(search);
}
const apiHit = async() =>{
    const getApi = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`)
    const jsonData = await getApi.json();
    setData(jsonData.results)
    console.log(jsonData.results);
}
return (

    
    <div className="image-search section-container">
        <h1>Image Search App</h1>
        <div className="search-container">
            <input type='text' placeholder='Search Images' onChange={handleSearch} />
            <button onClick={apiHit}>Search</button>
        </div>
        <div className="image-container">
            {data.map((iteam,index)=>{
                return <img key={index} src={iteam.urls.full} alt={iteam.alt_description}/>
            })}
        </div>
    </div>
  )
}

export default ImageSearch