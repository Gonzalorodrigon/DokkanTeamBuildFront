import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles/styles';

const Card = (props) => {

    const [selected, setSelected] = useState(false);
    const [color, setColor] = useState('black');

    const classes = useStyles();

    const clicked = () => {
        setColor('red');
        setSelected(!selected);
    };

    useEffect(() => {
    }, []);
    
    return (
        <div className={classes.item} onClick={() => clicked()} >
        <img alt='thumb' key={props.name} src={`${process.env.PUBLIC_URL}/assets/${props.rarity} ${props.name}.png`}/>
        </div>
    );
};

export default Card;