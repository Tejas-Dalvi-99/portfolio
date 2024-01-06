import React from 'react'
import { useEffect } from 'react'
import {gsap} from 'gsap';
import './Cursor.css'
import { useSearchParams } from 'react-router-dom';

function Cursor() {

    const queryParameters = useSearchParams()

    useEffect(()=>{
        const cursor = document.getElementById('custom-cursor');
        const dot = document.getElementById('dot');
        const circleBig = document.querySelectorAll('.circleBig');
        const noCircle = document.querySelectorAll('.noCircle');

        const onMouseMove = (event)=>{
            const {clientX, clientY} =  event; 
            gsap.set(dot,{x:clientX, y:clientY})
            gsap.to(cursor,{x:(clientX-13), y:(clientY-13)}).delay(0.01)
        }

        const onMouseEnterText = (event)=>{
            const circleBig = event.target;
            if(circleBig.classList.contains('circleBig')){
                gsap.to(cursor, {scale:3})
                gsap.to(dot, {scale:0})
            }
            if(circleBig.classList.contains('noCircle')){
                gsap.to(cursor, {scale:0})
                gsap.to(dot, {scale:1})
            }
        }

        const onMouseLeaveText = ()=>{
            gsap.to(cursor, {scale:1})
            gsap.to(dot, {scale:1})
        }

        document.addEventListener('mousemove', onMouseMove)
        circleBig.forEach((circleBig)=>{
            circleBig.addEventListener('mouseenter', onMouseEnterText)
            circleBig.addEventListener('mouseleave', onMouseLeaveText)
        })
        noCircle.forEach((noCircle)=>{
            noCircle.addEventListener('mouseenter', onMouseEnterText)
            noCircle.addEventListener('mouseleave', onMouseLeaveText)
        })
    },[queryParameters])
    

  return (
    <>
    <div id='custom-cursor' className='custom-cursor'></div>
     <div id='dot' className='dot'></div>
    </>
  )
}

export default Cursor; 