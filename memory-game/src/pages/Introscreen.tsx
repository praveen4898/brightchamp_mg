

import React, { useState } from 'react';
import introbg from '../images/introbackground.png';
import textbox1 from '../images/textbox1.png';
import startbutton from '../images/start.png';
import nextbutton from '../images/next.png';
import yesbutton from '../images/yess.png';
import { useNavigate } from 'react-router-dom';

const Introscreen: React.FC = () => {
  const navigate=useNavigate()
  const [textboxContent, setTextboxContent] = useState<string>('Welcome Kiddo !');
  const [buttonImage, setButtonImage] = useState<string>(startbutton);
  const [buttonText, setButtonText] = useState<string>('start');

  const handleButtonClick = () => {
    if (buttonText === 'start') {
      setTextboxContent('Hi, I am Mizo! \nand I love bananas');
      setButtonImage(nextbutton);
      setButtonText('next');
    } else if (buttonText === 'next') {
      setTextboxContent('Can you help me get \n some ?');
      setButtonImage(yesbutton);
      setButtonText('yes');
    } else if (buttonText === 'yes') {
     navigate( '/instruction')
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${introbg})`,
        backgroundRepeat: 'no-repeat',
        padding: '0',
        margin: '0 auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '1512px'
      }}
    >
      <img
        style={{
          height: '200px',
          width: '500px',
          marginTop: '30px',
          marginLeft: '50px',
          position: 'absolute',
        }}
        src={textbox1}
        alt="textbox"
      />
      <h2
        style={{
          color: '#11AEC6',
          fontSize: '40px',
          fontWeight: '800',
          marginTop: '60px',
          marginLeft: '870px',
          position: 'absolute',
          whiteSpace: 'pre-line',
        }}
      >
        {textboxContent}
      </h2>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          textDecoration: 'none',
          position: 'absolute',
          marginTop: '550px',
          marginLeft: '200px',
        }}
      >
        <img
          style={{ height: '100px', width: '250px' }}
          src={buttonImage}
          alt={buttonText + 'button'}
        />
      </button>
    </div>
  );
};

export default Introscreen;
