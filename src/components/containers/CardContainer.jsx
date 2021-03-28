import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getCards } from '../../adapters/getMethods'
import Card from "../Card";
import * as _ from 'lodash';
import { useStyles } from '../../styles/styles';

const CardContainer = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    const classes = useStyles();

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
          <div className={classes.items}>
             {
          _.sortBy(cards, 'color').map((card) => {
            return <Card key={card.name} rarity={card.rarity} id={card.name} name={card.name} />
        })
      }
          </div>
        );  
      }
    }

    export default CardContainer;