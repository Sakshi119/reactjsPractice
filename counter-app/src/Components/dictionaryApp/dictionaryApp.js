import React, { useState } from 'react'


const DictionaryApp = () => {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])
  const getInputWord = (e) =>{
    setSearch(e.target.value);
  }
  const searchWord = async() =>{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    const jsonData = await response.json();
    setData(jsonData[0]);
    console.log(jsonData);
  }
  return (
    <section className='dictionary-app'>
        <h2>Dictionary App</h2>
        <input type="text" placeholder='Search for a word' onChange={getInputWord}/>
        <button onClick={searchWord}>Search</button>

        {data?(<div className="word-info">
            <p><strong>Word:</strong> {data?.word}</p>
            {/* <p><strong>Phonetics:</strong> {data.phonetic}</p> */}
            <p><strong>Meaning:</strong></p>
            {data?.meanings && data?.meanings.length > 0 && data?.meanings[0]?.definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
        </div>):("Please enter a word to search")}

        {data && data?.sourceUrls && data?.sourceUrls?.length > 0 ? (<a href={data?.sourceUrls[0]} target='_blank'>Read More</a>):("")}
    </section>
  )
}

export default DictionaryApp