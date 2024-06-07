import React, { useState, useEffect } from 'react';
import apple from '../images/apple.png';
import pineapple from '../images/pineapple.png';
import mango from '../images/mango.png';
import banana from '../images/banana.png';
import grapes from '../images/grapes.png';
import orange from '../images/orange.png';
import pinkheart from '../images/pinkheart.png'
import blueheart from '../images/blueheart.png'
import next from '../images/next.png'
import '../activity.css';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  src?: string;
  letter: string;
}

const images: Card[] = [
  { id: 1, src: apple, letter: 'A' },
  { id: 2, src: mango, letter: 'M' },
  { id: 3, src: pineapple, letter: 'P' },
  { id: 4, src: grapes, letter: 'G' },
  { id: 5, src: orange, letter: 'O' },
  { id: 6, src: banana, letter: 'B' },
];

const shuffleArray = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Activity: React.FC = () => {
  const [imageCards, setImageCards] = useState<Card[]>([]);
  const [letterCards, setLetterCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);
  const [showMatchText, setShowMatchText] = useState(false);
const navigate=useNavigate()

const handleRewards=()=>{
navigate('/Finalpage',{state:{score}})
}


  useEffect(() => {
    const shuffledImages = shuffleArray(images);
    const shuffledLetters = shuffleArray(images.map(image => ({ id: image.id + 6, letter: image.letter })));
    setImageCards(shuffledImages);
    setLetterCards(shuffledLetters);
  }, []);

  useEffect(() => {
    if (matchedCards.length > 0) {
      setShowMatchText(true);
      const timeout = setTimeout(() => {
        setShowMatchText(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [matchedCards]);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2) return;
    if (selectedCards.includes(card)) return;

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      if (newSelectedCards[0].letter === newSelectedCards[1].letter) {
        setMatchedCards([...matchedCards, ...newSelectedCards]);
        setScore(score + 1);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="game">  
      <div className="score">Score: {score}</div>
      <div className="cards-container">
        <div className="cards left-grid">
          {imageCards.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCards.includes(card) ? 'flipped' : ''} ${matchedCards.includes(card) ? 'hidden' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-front">
                <img src={card.src} alt={card.letter} />
              </div>
              <div className="card-back image-back">
                <img src={pinkheart} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="cards right-grid">
          {letterCards.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCards.includes(card) ? 'flipped' : ''} ${matchedCards.includes(card) ? 'hidden' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-front">
                <span>{card.letter}</span>
              </div>
              <div className="card-back letter-back">
                <img src={blueheart} alt="blueheart" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showMatchText && <div className="match-text">It's a match!</div>}
      {matchedCards.length === 12 && <div className="win-message"><img onClick={handleRewards} src={next} alt="nextbutton" /></div>}

      
    </div>
  );
};

export default Activity;
