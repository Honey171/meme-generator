import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { FiSettings } from 'react-icons/fi';

function CreatePage() {
  const { state } = useLocation();

  /* Div download start */

  const divRef = useRef(null);

  const convertDivToCanvas = async (div) => {
    const canvas = await html2canvas(div, {
      windowWidth: div.width,
      windowHeight: div.height,
      logging: false,
      useCORS: true,
    });
    return canvas;
  };

  const handleDownloadClick = async (e) => {
    e.preventDefault();
    const div = divRef.current;
    try {
      await setIsBorderAdded(false);

      const canvas = await convertDivToCanvas(div);

      const url = canvas.toDataURL('image/jpg', 1);
      const link = document.createElement('a');
      link.download = 'image.jpg';
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.log(err);
    }
  };

  /* Div download end */

  /* Refs */
  const imageRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);
  const text6Ref = useRef(null);
  /* Refs end */

  /* States */
  const [isBorderAdded, setIsBorderAdded] = useState(false);
  const [isText1Shadow, setIsText1Shadow] = useState(false);
  const [isText2Shadow, setIsText2Shadow] = useState(false);
  const [isText3Shadow, setIsText3Shadow] = useState(false);
  const [isText4Shadow, setIsText4Shadow] = useState(false);
  const [isText5Shadow, setIsText5Shadow] = useState(false);
  const [isText6Shadow, setIsText6Shadow] = useState(false);
  const [text1Bold, setText1Bold] = useState(false);
  const [text2Bold, setText2Bold] = useState(false);
  const [text3Bold, setText3Bold] = useState(false);
  const [text4Bold, setText4Bold] = useState(false);
  const [text5Bold, setText5Bold] = useState(false);
  const [text6Bold, setText6Bold] = useState(false);
  const [text1Italic, setText1Italic] = useState(false);
  const [text2Italic, setText2Italic] = useState(false);
  const [text3Italic, setText3Italic] = useState(false);
  const [text4Italic, setText4Italic] = useState(false);
  const [text5Italic, setText5Italic] = useState(false);
  const [text6Italic, setText6Italic] = useState(false);
  const [text1FontFamily, setText1FontFamily] = useState('');
  const [text2FontFamily, setText2FontFamily] = useState('');
  const [text3FontFamily, setText3FontFamily] = useState('');
  const [text4FontFamily, setText4FontFamily] = useState('');
  const [text5FontFamily, setText5FontFamily] = useState('');
  const [text6FontFamily, setText6FontFamily] = useState('');
  const [text1Modal, setText1Modal] = useState(false);
  const [text2Modal, setText2Modal] = useState(false);
  const [text3Modal, setText3Modal] = useState(false);
  const [text4Modal, setText4Modal] = useState(false);
  const [text5Modal, setText5Modal] = useState(false);
  const [text6Modal, setText6Modal] = useState(false);
  const [text1Align, setText1Align] = useState('center');
  const [text2Align, setText2Align] = useState('center');
  const [text3Align, setText3Align] = useState('center');
  const [text4Align, setText4Align] = useState('center');
  const [text5Align, setText5Align] = useState('center');
  const [text6Align, setText6Align] = useState('center');
  const [text1Width, setText1Width] = useState(120);
  const [text2Width, setText2Width] = useState(120);
  const [text3Width, setText3Width] = useState(120);
  const [text4Width, setText4Width] = useState(120);
  const [text5Width, setText5Width] = useState(120);
  const [text6Width, setText6Width] = useState(120);
  const [text1Color, setText1Color] = useState('#000000');
  const [text2Color, setText2Color] = useState('#000000');
  const [text3Color, setText3Color] = useState('#000000');
  const [text4Color, setText4Color] = useState('#000000');
  const [text5Color, setText5Color] = useState('#000000');
  const [text6Color, setText6Color] = useState('#000000');
  const [text1ShadowColor, setText1ShadowColor] = useState('#000000');
  const [text2ShadowColor, setText2ShadowColor] = useState('#000000');
  const [text3ShadowColor, setText3ShadowColor] = useState('#000000');
  const [text4ShadowColor, setText4ShadowColor] = useState('#000000');
  const [text5ShadowColor, setText5ShadowColor] = useState('#000000');
  const [text6ShadowColor, setText6ShadowColor] = useState('#000000');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [fontSize1, setFontSize1] = useState(16);
  const [fontSize2, setFontSize2] = useState(16);
  const [fontSize3, setFontSize3] = useState(16);
  const [fontSize4, setFontSize4] = useState(16);
  const [fontSize5, setFontSize5] = useState(16);
  const [fontSize6, setFontSize6] = useState(16);
  const [text1Rotation, setText1Rotation] = useState(0);
  const [text2Rotation, setText2Rotation] = useState(0);
  const [text3Rotation, setText3Rotation] = useState(0);
  const [text4Rotation, setText4Rotation] = useState(0);
  const [text5Rotation, setText5Rotation] = useState(0);
  const [text6Rotation, setText6Rotation] = useState(0);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [isDragging3, setIsDragging3] = useState(false);
  const [isDragging4, setIsDragging4] = useState(false);
  const [isDragging5, setIsDragging5] = useState(false);
  const [isDragging6, setIsDragging6] = useState(false);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });
  const [offset3, setOffset3] = useState({ x: 0, y: 0 });
  const [offset4, setOffset4] = useState({ x: 0, y: 0 });
  const [offset5, setOffset5] = useState({ x: 0, y: 0 });
  const [offset6, setOffset6] = useState({ x: 0, y: 0 });
  const [text1X, setText1X] = useState(0);
  const [text1Y, setText1Y] = useState(0);
  const [text2X, setText2X] = useState(0);
  const [text2Y, setText2Y] = useState(50);
  const [text3X, setText3X] = useState(0);
  const [text3Y, setText3Y] = useState(100);
  const [text4X, setText4X] = useState(0);
  const [text4Y, setText4Y] = useState(150);
  const [text5X, setText5X] = useState(0);
  const [text5Y, setText5Y] = useState(200);
  const [text6X, setText6X] = useState(0);
  const [text6Y, setText6Y] = useState(250);
  /* States end */

  /* State reset start */
  const resetStates = (e) => {
    e.preventDefault();
    setIsBorderAdded(false);
    setText1Bold(false);
    setText2Bold(false);
    setText3Bold(false);
    setText4Bold(false);
    setText5Bold(false);
    setText6Bold(false);
    setText1Italic(false);
    setText2Italic(false);
    setText3Italic(false);
    setText4Italic(false);
    setText5Italic(false);
    setText6Italic(false);
    setText1FontFamily('');
    setText2FontFamily('');
    setText3FontFamily('');
    setText4FontFamily('');
    setText5FontFamily('');
    setText6FontFamily('');
    setText1Modal(false);
    setText2Modal(false);
    setText3Modal(false);
    setText4Modal(false);
    setText5Modal(false);
    setText6Modal(false);
    setText1Align('center');
    setText2Align('center');
    setText3Align('center');
    setText4Align('center');
    setText5Align('center');
    setText6Align('center');
    setText1Width(120);
    setText2Width(120);
    setText3Width(120);
    setText4Width(120);
    setText5Width(120);
    setText6Width(120);
    setText1Color('#000000');
    setText2Color('#000000');
    setText3Color('#000000');
    setText4Color('#000000');
    setText5Color('#000000');
    setText6Color('#000000');
    setText1('');
    setText2('');
    setText3('');
    setText4('');
    setText5('');
    setText6('');
    setFontSize1(16);
    setFontSize2(16);
    setFontSize3(16);
    setFontSize4(16);
    setFontSize5(16);
    setFontSize6(16);
    setText1Rotation(0);
    setText2Rotation(0);
    setText3Rotation(0);
    setText4Rotation(0);
    setText5Rotation(0);
    setText6Rotation(0);
    setIsDragging1(false);
    setIsDragging2(false);
    setIsDragging3(false);
    setIsDragging4(false);
    setIsDragging5(false);
    setIsDragging6(false);
    setOffset1({ x: 0, y: 0 });
    setOffset2({ x: 0, y: 0 });
    setOffset3({ x: 0, y: 0 });
    setOffset4({ x: 0, y: 0 });
    setOffset5({ x: 0, y: 0 });
    setOffset6({ x: 0, y: 0 });
    setText1X(0);
    setText2X(0);
    setText3X(0);
    setText4X(0);
    setText5X(0);
    setText6X(0);
    setText1Y(0);
    setText2Y(50);
    setText3Y(100);
    setText4Y(150);
    setText5Y(200);
    setText6Y(250);
  };
  /* State reset end*/

  /* Text move functions start */
  function getClientCoords(e) {
    if (
      e.type === 'touchstart' ||
      e.type === 'touchmove' ||
      e.type === 'touchend'
    ) {
      const touch = e.targetTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    } else {
      return { x: e.clientX, y: e.clientY };
    }
  }
  function handleMouseDown1(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging1(true);
    const coords = getClientCoords(e);
    setOffset1({
      x: coords.x - rect.left - text1X,
      y: coords.y - rect.top - text1Y,
    });
  }
  function handleMouseMove1(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text1Ref.current.offsetWidth;
    const textHeight = text1Ref.current.offsetHeight;
    if (isDragging1) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset1.x;
      const newY = coords.y - rect.top - offset1.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText1X(newX);
        setText1Y(newY);
      } else {
        setText1X(0);
        setText1Y(0);
      }
    }
  }
  function handleMouseUp1(e) {
    setIsDragging1(false);
  }
  function handleMouseMove2(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text2Ref.current.offsetWidth;
    const textHeight = text2Ref.current.offsetHeight;
    if (isDragging2) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset2.x;
      const newY = coords.y - rect.top - offset2.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText2X(newX);
        setText2Y(newY);
      } else {
        setText2X(0);
        setText2Y(0);
      }
    }
  }
  function handleMouseDown2(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging2(true);
    const coords = getClientCoords(e);
    setOffset2({
      x: coords.x - rect.left - text2X,
      y: coords.y - rect.top - text2Y,
    });
  }
  function handleMouseUp2(event) {
    setIsDragging2(false);
  }
  function handleMouseMove3(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text3Ref.current.offsetWidth;
    const textHeight = text3Ref.current.offsetHeight;
    if (isDragging3) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset3.x;
      const newY = coords.y - rect.top - offset3.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText3X(newX);
        setText3Y(newY);
      } else {
        setText3X(0);
        setText3Y(0);
      }
    }
  }
  function handleMouseDown3(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging3(true);
    const coords = getClientCoords(e);
    setOffset3({
      x: coords.x - rect.left - text3X,
      y: coords.y - rect.top - text3Y,
    });
  }
  function handleMouseUp3(event) {
    setIsDragging3(false);
  }
  function handleMouseMove4(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text4Ref.current.offsetWidth;
    const textHeight = text4Ref.current.offsetHeight;
    if (isDragging4) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset4.x;
      const newY = coords.y - rect.top - offset4.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText4X(newX);
        setText4Y(newY);
      } else {
        setText4X(0);
        setText4Y(0);
      }
    }
  }
  function handleMouseDown4(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging4(true);
    const coords = getClientCoords(e);
    setOffset4({
      x: coords.x - rect.left - text4X,
      y: coords.y - rect.top - text4Y,
    });
  }
  function handleMouseUp4(event) {
    setIsDragging4(false);
  }
  function handleMouseMove5(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text5Ref.current.offsetWidth;
    const textHeight = text5Ref.current.offsetHeight;
    if (isDragging5) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset5.x;
      const newY = coords.y - rect.top - offset5.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText5X(newX);
        setText5Y(newY);
      } else {
        setText5X(0);
        setText5Y(0);
      }
    }
  }
  function handleMouseDown5(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging5(true);
    const coords = getClientCoords(e);
    setOffset5({
      x: coords.x - rect.left - text5X,
      y: coords.y - rect.top - text5Y,
    });
  }
  function handleMouseUp5(event) {
    setIsDragging5(false);
  }
  function handleMouseMove6(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    const textWidth = text6Ref.current.offsetWidth;
    const textHeight = text6Ref.current.offsetHeight;
    if (isDragging6) {
      const coords = getClientCoords(e);
      const newX = coords.x - rect.left - offset6.x;
      const newY = coords.y - rect.top - offset6.y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX + textWidth <= canvas.width &&
        newY + textHeight <= canvas.height &&
        newX + textWidth <= rect.width &&
        newY + textHeight <= rect.height
      ) {
        setText6X(newX);
        setText6Y(newY);
      } else {
        setText6X(0);
        setText6Y(0);
      }
    }
  }
  function handleMouseDown6(e) {
    const canvas = imageRef.current;
    const rect = canvas.getBoundingClientRect();
    setIsDragging6(true);
    const coords = getClientCoords(e);
    setOffset6({
      x: coords.x - rect.left - text6X,
      y: coords.y - rect.top - text6Y,
    });
  }
  function handleMouseUp6(event) {
    setIsDragging6(false);
  }
  /* Text move functions end */

  return (
    <main className="flex lg:flex-row flex-col items-center justify-center gap-10 my-5 lg:my-0 min-h-screen">
      {/* Container divs start */}
      <div
        className="relative downloadThis overflow-hidden lg:w-[31.25rem] lg:h-[31.25rem] w-[340px] h-[340px] md:w-[500px] md:h-[500px]"
        ref={divRef}
      >
        <img
          src={state?.meme}
          alt=""
          ref={imageRef}
          className="lg:w-[500px] lg:h-[500px] w-[340px] h-[340px]  md:w-[500px] md:h-[500px]"
        />
        <div
          ref={text1Ref}
          className={`absolute ${
            isDragging1 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text1X,
            top: text1Y,
          }}
          onMouseDown={handleMouseDown1}
          onMouseMove={handleMouseMove1}
          onMouseUp={handleMouseUp1}
          onTouchStart={handleMouseDown1}
          onTouchMove={handleMouseMove1}
          onTouchEnd={handleMouseUp1}
        >
          <p
            style={{
              fontSize: `${fontSize1 ? fontSize1 + 'px' : '16px'}`,
              transform: `rotate(${text1Rotation ? text1Rotation : 0}deg)`,
              color: `${text1Color}`,
              width: `${text1Width ? text1Width + 'px' : '100px'}`,
              textAlign: `${text1Align}`,
              fontFamily: `${text1FontFamily}`,
              fontWeight: `${text1Bold ? '800' : '400'}`,
              fontStyle: `${text1Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText1Shadow ? `2px 1px ${text1ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96 break-words ${
              isBorderAdded && text1.trim() !== '' ? 'border border-black' : ''
            } italic`}
          >
            {text1}
          </p>
        </div>
        <div
          ref={text2Ref}
          className={`absolute  ${
            isDragging2 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text2X,
            top: text2Y,
          }}
          onMouseDown={handleMouseDown2}
          onMouseMove={handleMouseMove2}
          onMouseUp={handleMouseUp2}
          onTouchStart={handleMouseDown2}
          onTouchMove={handleMouseMove2}
          onTouchEnd={handleMouseUp2}
        >
          <div
            style={{
              fontSize: `${fontSize2 ? fontSize2 + 'px' : '16px'}`,
              transform: `rotate(${text2Rotation ? text2Rotation : 0}deg)`,
              color: `${text2Color}`,
              width: `${text2Width ? text2Width + 'px' : '100px'}`,
              textAlign: `${text2Align}`,
              fontFamily: `${text2FontFamily}`,
              fontWeight: `${text2Bold ? '800' : '400'}`,
              fontStyle: `${text2Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText2Shadow ? `2px 1px ${text2ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96 break-words ${
              isBorderAdded && text2.trim() !== '' ? 'border border-black' : ''
            }`}
          >
            {text2}
          </div>
        </div>
        <div
          ref={text3Ref}
          className={`absolute ${
            isDragging3 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text3X,
            top: text3Y,
          }}
          onMouseDown={handleMouseDown3}
          onMouseMove={handleMouseMove3}
          onMouseUp={handleMouseUp3}
          onTouchStart={handleMouseDown3}
          onTouchMove={handleMouseMove3}
          onTouchEnd={handleMouseUp3}
        >
          <p
            style={{
              fontSize: `${fontSize3 ? fontSize3 + 'px' : '16px'}`,
              transform: `rotate(${text3Rotation ? text3Rotation : 0}deg)`,
              color: `${text3Color}`,
              width: `${text3Width ? text3Width + 'px' : '100px'}`,
              textAlign: `${text3Align}`,
              fontFamily: `${text3FontFamily}`,
              fontWeight: `${text3Bold ? '800' : '400'}`,
              fontStyle: `${text3Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText3Shadow ? `2px 1px ${text3ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96 break-words ${
              isBorderAdded && text3.trim() !== '' ? 'border border-black' : ''
            }`}
          >
            {text3}
          </p>
        </div>
        <div
          ref={text4Ref}
          className={`absolute ${
            isDragging4 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text4X,
            top: text4Y,
          }}
          onMouseDown={handleMouseDown4}
          onMouseMove={handleMouseMove4}
          onMouseUp={handleMouseUp4}
          onTouchStart={handleMouseDown4}
          onTouchMove={handleMouseMove4}
          onTouchEnd={handleMouseUp4}
        >
          <p
            style={{
              fontSize: `${fontSize4 ? fontSize4 + 'px' : '16px'}`,
              transform: `rotate(${text4Rotation ? text4Rotation : 0}deg)`,
              color: `${text4Color}`,
              width: `${text4Width ? text4Width + 'px' : '100px'}`,
              textAlign: `${text4Align}`,
              fontFamily: `${text4FontFamily}`,
              fontWeight: `${text4Bold ? '800' : '400'}`,
              fontStyle: `${text4Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText4Shadow ? `2px 1px ${text4ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96  break-words ${
              isBorderAdded && text4.trim() !== '' ? 'border border-black' : ''
            }`}
          >
            {text4}
          </p>
        </div>
        <div
          ref={text5Ref}
          className={`absolute ${
            isDragging5 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text5X,
            top: text5Y,
          }}
          onMouseDown={handleMouseDown5}
          onMouseMove={handleMouseMove5}
          onMouseUp={handleMouseUp5}
          onTouchStart={handleMouseDown5}
          onTouchMove={handleMouseMove5}
          onTouchEnd={handleMouseUp5}
        >
          <p
            style={{
              fontSize: `${fontSize5 ? fontSize5 + 'px' : '16px'}`,
              transform: `rotate(${text5Rotation ? text5Rotation : 0}deg)`,
              color: `${text5Color}`,
              width: `${text5Width ? text5Width + 'px' : '100px'}`,
              textAlign: `${text5Align}`,
              fontFamily: `${text5FontFamily}`,
              fontWeight: `${text5Bold ? '800' : '400'}`,
              fontStyle: `${text5Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText5Shadow ? `2px 1px ${text5ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96break-words ${
              isBorderAdded && text5.trim() !== '' ? 'border border-black' : ''
            }`}
          >
            {text5}
          </p>
        </div>
        <div
          ref={text6Ref}
          className={`absolute ${
            isDragging6 ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: text6X,
            top: text6Y,
          }}
          onMouseDown={handleMouseDown6}
          onMouseMove={handleMouseMove6}
          onMouseUp={handleMouseUp6}
          onTouchStart={handleMouseDown6}
          onTouchMove={handleMouseMove6}
          onTouchEnd={handleMouseUp6}
        >
          <p
            style={{
              fontSize: `${fontSize6 ? fontSize6 + 'px' : '16px'}`,
              transform: `rotate(${text6Rotation ? text6Rotation : 0}deg)`,
              color: `${text6Color}`,
              width: `${text6Width ? text6Width + 'px' : '100px'}`,
              textAlign: `${text6Align}`,
              fontFamily: `${text6FontFamily}`,
              fontWeight: `${text6Bold ? '800' : '400'}`,
              fontStyle: `${text6Italic ? 'italic' : 'normal'}`,
              textShadow: `${
                isText6Shadow ? `2px 1px ${text6ShadowColor}` : ''
              }`,
            }}
            className={`max-h-96 break-words ${
              isBorderAdded && text6.trim() !== '' ? 'border border-black' : ''
            }`}
          >
            {text6}
          </p>
        </div>
      </div>
      {/* Container divs end */}
      <div className="flex flex-col space-y-5">
        {/* Text 1 */}
        <form className="flex flex-col">
          <div className="flex flex-col items-center space-y-2 pb-2">
            <button
              onClick={handleDownloadClick}
              className="bg-[#f1c40f] px-1 py-1 rounded-md font-bold transition-all duration-300 hover:text-white hover:bg-red-500 "
            >
              Download Meme
            </button>
            <button
              onClick={resetStates}
              className="bg-[#f1c40f] px-1 py-1 rounded-md font-bold transition-all duration-300 hover:text-white hover:bg-red-500 "
            >
              RESET ALL SETTINGS
            </button>
            <label className="flex flex-col items-center border px-1 py-1 rounded-md">
              <input
                type="checkbox"
                onChange={() => setIsBorderAdded(!isBorderAdded)}
                checked={isBorderAdded}
              />
              <p className="text-sm text-white">
                Add border to texts for better move them
              </p>
            </label>
          </div>
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-2 rounded-md">
            <label className="flex items-center space-x-5">
              <input
                type="text"
                value={text1}
                placeholder="Text #1"
                onChange={(e) => setText1(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text1Color}
                onChange={(e) => setText1Color(e.target.value)}
              />
              <input
                type="color"
                value={text1ShadowColor}
                onChange={(e) => setText1ShadowColor(e.target.value)}
                className={`${
                  isText1Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text2Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                ) {
                  return;
                }
                setText1Modal(!text1Modal);
              }}
            >
              <FiSettings
                className={`text-xl  ${
                  text2Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } transition-all duration-300`}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text1Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText1Bold(!text1Bold)}
                    checked={text1Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText1Shadow(!isText1Shadow)}
                    checked={isText1Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText1Italic(!text1Italic)}
                    checked={text1Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width (0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize1}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize1(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize1(16);
                      return;
                    }
                    setFontSize1(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text1Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText1Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText1Width(0);
                      return;
                    }
                    setText1Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text1Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText1Rotation(0);
                      return;
                    }
                    setText1Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText1Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText1FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 1 end */}

        {/* Text 2 */}
        <form className="flex flex-col">
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-1 rounded-md">
            <label className="flex space-x-5 items-center">
              <input
                type="text"
                value={text2}
                placeholder="Text #2"
                onChange={(e) => setText2(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text2Color}
                onChange={(e) => setText2Color(e.target.value)}
              />
              <input
                type="color"
                value={text2ShadowColor}
                onChange={(e) => setText2ShadowColor(e.target.value)}
                className={`${
                  isText2Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                ) {
                  return;
                }
                setText2Modal(!text2Modal);
              }}
            >
              <FiSettings
                className={`text-xl ${
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } `}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text2Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText2Bold(!text2Bold)}
                    checked={text2Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText2Shadow(!isText2Shadow)}
                    checked={isText2Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText2Italic(!text2Italic)}
                    checked={text2Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width (0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize2}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize2(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize2(16);
                      return;
                    }
                    setFontSize2(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text2Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText2Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText2Width(0);
                      return;
                    }
                    setText2Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text2Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText2Rotation(0);
                      return;
                    }
                    setText2Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText2Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText2FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 2 end */}

        {/* Text 3 */}
        <form className="flex flex-col">
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-1 rounded-md">
            <label className="flex space-x-5 items-center">
              <input
                type="text"
                value={text3}
                placeholder="Text #3"
                onChange={(e) => setText3(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text3Color}
                onChange={(e) => setText3Color(e.target.value)}
                className=""
              />
              <input
                type="color"
                value={text3ShadowColor}
                onChange={(e) => setText3ShadowColor(e.target.value)}
                className={`${
                  isText3Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text2Modal ||
                  text1Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                ) {
                  return;
                }
                setText3Modal(!text3Modal);
              }}
            >
              <FiSettings
                className={`text-xl ${
                  text2Modal ||
                  text1Modal ||
                  text4Modal ||
                  text5Modal ||
                  text6Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } `}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text3Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText3Bold(!text3Bold)}
                    checked={text3Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText3Shadow(!isText3Shadow)}
                    checked={isText3Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText3Italic(!text3Italic)}
                    checked={text3Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width (0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize3}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize3(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize3(16);
                      return;
                    }
                    setFontSize3(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text3Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText3Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText3Width(0);
                      return;
                    }
                    setText3Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text3Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText3Rotation(0);
                      return;
                    }
                    setText3Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText3Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText3FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 3 end */}

        {/* Text 4 */}
        <form className="flex flex-col">
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-1 rounded-md">
            <label className="flex space-x-5 items-center">
              <input
                type="text"
                value={text4}
                placeholder="Text #4"
                onChange={(e) => setText4(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text4Color}
                onChange={(e) => setText4Color(e.target.value)}
                className=""
              />
              <input
                type="color"
                value={text4ShadowColor}
                onChange={(e) => setText4ShadowColor(e.target.value)}
                className={`${
                  isText4Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text5Modal ||
                  text6Modal
                ) {
                  return;
                }
                setText4Modal(!text4Modal);
              }}
            >
              <FiSettings
                className={`text-xl ${
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text5Modal ||
                  text6Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } `}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text4Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText4Bold(!text4Bold)}
                    checked={text4Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText4Shadow(!isText4Shadow)}
                    checked={isText4Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText4Italic(!text4Italic)}
                    checked={text4Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width(0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize4}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize4(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize4(16);
                      return;
                    }
                    setFontSize4(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text4Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText4Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText4Width(0);
                      return;
                    }
                    setText4Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text4Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText4Rotation(0);
                      return;
                    }
                    setText4Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText4Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText4FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 4 end */}

        {/* Text 5 */}
        <form className="flex flex-col">
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-1 rounded-md">
            <label className="flex space-x-5 items-center">
              <input
                type="text"
                value={text5}
                placeholder="Text #5"
                onChange={(e) => setText5(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text5Color}
                onChange={(e) => setText5Color(e.target.value)}
                className=""
              />
              <input
                type="color"
                value={text5ShadowColor}
                onChange={(e) => setText5ShadowColor(e.target.value)}
                className={`${
                  isText5Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text6Modal
                ) {
                  return;
                }
                setText5Modal(!text5Modal);
              }}
            >
              <FiSettings
                className={`text-xl ${
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text6Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } `}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text5Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText5Bold(!text5Bold)}
                    checked={text5Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText5Shadow(!isText5Shadow)}
                    checked={isText5Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText5Italic(!text5Italic)}
                    checked={text5Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width(0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize5}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize5(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize5(16);
                      return;
                    }
                    setFontSize5(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text5Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText5Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText5Width(0);
                      return;
                    }
                    setText5Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text5Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText5Rotation(0);
                      return;
                    }
                    setText5Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText5Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText5FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 5 end */}

        {/* Text 6 */}
        <form className="flex flex-col">
          <div className="flex flex-row space-x-5 items-center justify-center relative border px-1 py-1 rounded-md">
            <label className="flex space-x-5 items-center">
              <input
                type="text"
                value={text6}
                placeholder="Text #6"
                onChange={(e) => setText6(e.target.value)}
                className="px-1.5 py-1.5 bg-[#151b25] focus:bg-slate-900 transition-all duration-300 border border-transparent focus:border focus:border-black outline-none rounded-md text-sm text-white placeholder:text-white"
              />
              <input
                type="color"
                value={text6Color}
                onChange={(e) => setText6Color(e.target.value)}
                className=""
              />
              <input
                type="color"
                value={text6ShadowColor}
                onChange={(e) => setText6ShadowColor(e.target.value)}
                className={`${
                  isText6Shadow ? 'block' : 'hidden'
                } shadow-md shadow-white`}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal
                ) {
                  return;
                }
                setText6Modal(!text6Modal);
              }}
            >
              <FiSettings
                className={`text-xl ${
                  text2Modal ||
                  text1Modal ||
                  text3Modal ||
                  text4Modal ||
                  text5Modal
                    ? 'cursor-not-allowed text-red-500'
                    : 'text-[#f1c40f]'
                } `}
              />
            </button>
            <div
              className={`absolute right-6 top-10 bg-[#151b25] flex flex-col px-2 py-2 ${
                text6Modal ? 'block' : 'hidden'
              } z-50 text-sm rounded-sm space-y-1`}
            >
              <div className="flex justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText6Bold(!text6Bold)}
                    checked={text6Bold}
                  />
                  <p className="font-bold text-white">Bold</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setIsText6Shadow(!isText6Shadow)}
                    checked={isText6Shadow}
                  />
                  <p className="text-white shadow-white shadow-md">Shadow</p>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    onChange={() => setText6Italic(!text6Italic)}
                    checked={text6Italic}
                  />
                  <p className="italic text-white">Italic</p>
                </label>
              </div>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Font Size width(0-48px)
                </p>
                <input
                  type="number"
                  value={fontSize6}
                  onChange={(e) => {
                    if (e.target.value > 48) {
                      setFontSize6(48);
                      return;
                    }
                    if (e.target.value < 0) {
                      setFontSize6(16);
                      return;
                    }
                    setFontSize6(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Width (max 300px):{' '}
                </p>
                <input
                  type="number"
                  value={text6Width}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setText6Width(300);
                      return;
                    }
                    if (e.target.value < 0) {
                      setText6Width(0);
                      return;
                    }
                    setText6Width(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Rotate degree (-360-360):{' '}
                </p>
                <input
                  type="number"
                  value={text6Rotation}
                  onChange={(e) => {
                    if (e.target.value > 360 || e.target.value < -360) {
                      setText6Rotation(0);
                      return;
                    }
                    setText6Rotation(e.target.value);
                  }}
                  className="w-[20%] bg-[#f1c40f] outline-none rounded-sm px-1 font-semibold"
                />
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">
                  Text align (Vertical){' '}
                </p>
                <select
                  onChange={(e) => setText6Align(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value={'center'}>Center</option>
                  <option value={'right'}>Right</option>
                  <option value={'left'}>Left</option>
                </select>
              </label>
              <label className="flex flex-col items-center">
                <p className="font-semibold text-white/70">Font families </p>
                <select
                  onChange={(e) => setText6FontFamily(e.target.value)}
                  className="w-[45%] outline-none rounded-sm px-1 bg-[#f1c40f]"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Garamond, serif">Garamond</option>
                  <option value="Courier New, monospace">Courier New</option>
                  <option value="Lucida Console, monospace">
                    Lucida Console
                  </option>
                </select>
              </label>
            </div>
          </div>
        </form>
        {/* Text 6 end */}
      </div>
    </main>
  );
}

export default CreatePage;
