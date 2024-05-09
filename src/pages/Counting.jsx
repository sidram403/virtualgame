import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Counting = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [trackRotation, setTrackRotation] = useState(0);
  const [count, setCount] = useState(3);
  const radius = 100; // radius of the circle
  const circumference = 2 * Math.PI * radius;
  const navigate = useNavigate()

  useEffect(() => {
    const progressCircle = document.querySelector(".progress");
    const trackCircle = document.querySelector(".track");

    // Set initial styles
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.transition = 'stroke-dashoffset 0.5s ease-in-out'; // Smooth transition
    // progressCircle.style.strokeDashoffset = circumference;

    const progressInterval = setInterval(() => {
      if (count === 1) {
        clearInterval(progressInterval);
        setProgressPercent(100);
        
      } else if (count === 3) {
        const newPercent = 33.33;
        setProgressPercent(newPercent);
        progressCircle.style.strokeDashoffset = circumference - (newPercent / 100) * circumference;
      } else if (count === 2) {
        const newPercent = 66.66;
        setProgressPercent(newPercent);
        progressCircle.style.strokeDashoffset = circumference - (newPercent / 100) * circumference;
      } 
      else  if(count===0){
        navigate('/other')
      }
    }, 500);

    const trackInterval = setInterval(() => {
      setTrackRotation(prevRotation => (prevRotation + 120) % 360); // Rotate by 120 degrees for each count
      setCount(prevCount => prevCount - 1);
      if (count === 1) {
        clearInterval(trackInterval); // Stop rotating progress when count is 1
      }
      
       
      
      
    }, 1500);
     // Rotate every 1.5 seconds


    return () => {
      clearInterval(progressInterval);
      clearInterval(trackInterval);
    };

  }, [count]);

 

  return (
    <div className='center-card'>
        <div className='countdown-circle'>
            <p>Game starting in...</p>
        <svg width="250" height="250">
        {/* Background track circle */}
        <circle r="100" cx="125" cy="125" className="track" style={{ fill: 'rgba(0,0,0,0.3)' }}></circle>
        {/* Progress circle */}
        <circle r="100" cx="125" cy="125"  className="progress" style={{ fill: 'none', stroke: '#fff', strokeWidth: "10px", strokeDashoffset: `calc(${circumference} - (${progressPercent} / 100) * ${circumference})` }} ></circle>
        {/* Countdown text */}
        {count > -1 && <text x="50%" y="50%"  style={{ transform: "none", fill: '#fff', fontSize: '60px', fontWeight:"bold" }} dominantBaseline="middle" textAnchor="middle" className="progress-text">0{count}</text>}
      </svg>
        </div>
      
    </div>
  );
}

export default Counting;
