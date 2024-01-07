import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import './Cursor.css';

function Cursor() {
  const location = useLocation();

  const onMouseMove = useRef((event) => {
    const { clientX, clientY } = event;
    gsap.set(dotRef.current, { x: clientX, y: clientY });
    gsap.to(cursorRef.current, { x: clientX - 13, y: clientY - 13 }).delay(0.01);
  });

  const onMouseEnterText = useRef((event) => {
    const circleElement = event.target;
    const circleBig = circleElement.classList.contains('circleBig');
    const noCircle = circleElement.classList.contains('noCircle');
    const dotBig = circleElement.classList.contains('dotBig');

    if (circleBig) {
      gsap.to(cursorRef.current, { scale: 3 });
      gsap.to(dotRef.current, { scale: 0 });
    }
    if (noCircle) {
      gsap.to(cursorRef.current, { scale: 0 });
      gsap.to(dotRef.current, { scale: 1 });
    }
    if (dotBig) {
      gsap.to(cursorRef.current, { scale: 0 });
      gsap.to(dotRef.current, { scale: 6 });
      cursorTextRef.current.style.display = 'block';
    }
  });

  const onMouseLeaveText = useRef(() => {
    gsap.to(cursorRef.current, { scale: 1 });
    gsap.to(dotRef.current, { scale: 1 });
    cursorTextRef.current.style.display = 'none';
  });

  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove.current);

    const circleBigElements = document.querySelectorAll('.circleBig');
    const noCircleElements = document.querySelectorAll('.noCircle');
    const dotBigElements = document.querySelectorAll('.dotBig');

    circleBigElements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterText.current);
      element.addEventListener('mouseleave', onMouseLeaveText.current);
    });

    noCircleElements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterText.current);
      element.addEventListener('mouseleave', onMouseLeaveText.current);
    });

    dotBigElements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterText.current);
      element.addEventListener('mouseleave', onMouseLeaveText.current);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove.current);

      circleBigElements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnterText.current);
        element.removeEventListener('mouseleave', onMouseLeaveText.current);
      });

      noCircleElements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnterText.current);
        element.removeEventListener('mouseleave', onMouseLeaveText.current);
      });

      dotBigElements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnterText.current);
        element.removeEventListener('mouseleave', onMouseLeaveText.current);
      });
    };
  }, [location]);

  return (
    <>
      <div id='custom-cursor' className='custom-cursor' ref={cursorRef}></div>
      <div id='dot' className='dot' ref={dotRef}>
        <span className='cursor-text' ref={cursorTextRef}>
          Click to View
        </span>
      </div>
    </>
  );
}

export default Cursor;
