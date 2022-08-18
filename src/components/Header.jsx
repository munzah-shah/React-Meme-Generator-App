import React from 'react'
import logo from '../assets/logo.png'


export default function Header() {
    return (
        <div className='header'>
            <div className='header--logobox'>
                <img src={logo} alt="logo"></img>
                <h1>Meme Generator</h1>
            </div>
            <h3 className='header--heading'>React Course - Project 3</h3>
        </div>
    )
}