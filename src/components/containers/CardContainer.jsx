import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getCards } from '../../adapters/getMethods'
import Card from "../Card";


const CardContainer = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect (() => {
      const fetchCards = async () => {
        const cards = await getCards();
        setCards(cards);
        setIsLoaded(true);
    };    
    fetchCards()
}, []);

       if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
             {
          cards.map((card) => {
            return <Card key={card.name} id={card.name} name={card.name} />
        })
      }
          </div>
        );
      }
    }

    export default CardContainer;