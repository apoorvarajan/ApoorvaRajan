import React from 'react'
import '../../style/newHomeStyles/intro.css'
const Intro = () =>{
    return <div className='intro-container'>
                <div className="photo-wrap">
                    <img className="photo" height="250em" src="./headshot.png"/>
                </div>
                <div className='intro-text-wrap'>
                    <div className='intro-text1'>
                        Hey there! My name is Apoorva.
                    </div>
                    <div className='intro-text2'>
                        I am a Software Engineer with over 3 years of experience currently based in United States and on the lookout for full-time roles.
                    </div>
                </div>
            </div>
}
export default Intro