import React from 'react'
import CardImg from '../assets/section.png'
import StartButton from '../assets/button2.png'
import BackButton from '../assets/button3.png'
import { useNavigate } from 'react-router-dom'

const data ={
    "Game": {
      "id": "ec14dcc2-304d-4052-a177-01d68dd6a952",
      "name": "Laser Maze",
      "playInstruction": "Instructions to play laser maze, ##12e324 erferfefr referfrwefrefsfe efewrtf wedqwwpiounb iqu3p9e8hjbsd,cnm ljhlijnsdcmn ",
      "version": 1,
      "perPersonCost": 500
    }
  }

  const instructions = data.Game.playInstruction.split(",").map(instruction => instruction.trim());


const Instructions = () => {

    const navigate = useNavigate()

  const handleStart = () =>{
      navigate('/counting')
  }
  const handleBack = () =>{
    navigate('/')
  }
  return (
    <div className='center-card'>
        <div className='card-img'>
        <img src={CardImg} alt="card img" className='instruction-card-bg' />
        <div className='instruction-card-content'>
            <h1>INSTRUCTIONS</h1>
            
            <ol className='instruction-list'>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
            <div className='action-btns' style={{justifyContent:"center", width:"90%", gap:"60px"}}>
          <img onClick={handleBack} src={BackButton} alt="play button" />
          <img onClick={handleStart}  src={StartButton} alt="start button" />
      </div>

        </div>

        </div>
    </div>
  )
}

export default Instructions