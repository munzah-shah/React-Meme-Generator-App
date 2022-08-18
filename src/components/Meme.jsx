import React from 'react'

export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/261o3j.jpg"
    }) 

    const [allMemesArray, setAllMemeObjects] = React.useState([])
   
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeObjects(data.data.memes))
    }, [])


    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemesArray.length)
        const url = allMemesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // meme.topText= ""
        // meme.bottomText=""
    }   

    function generateMemeText(event) {

        const {name, value} = event.target;

        setMeme(prevText => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className='form'>
                <input
                    className='form--inputs'
                    type="text"
                    name="topText"
                    placeholder='Enter first line'
                    value={meme.topText}
                    onChange={generateMemeText}
                />
                <input 
                    className='form--inputs'
                    type="text"
                    name="bottomText"
                    placeholder='Enter second line'
                    value={meme.bottomText}
                    onChange={generateMemeText}
                />
                <button className='form--btn' onClick={getMemeImage}>Get a new meme image ⚡</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className="meme-image"></img>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}