import React, { useEffect, useState } from 'react';

const Card = (props) => {

    const [selected, setSelected] = useState(false);
    const [color, setColor] = useState('black');

    const clicked = () => {
        setColor('red');
        setSelected(!selected);
    };

    const cardThumbName = () => {
        let cardThumbName = props.name.replace(/ /g, "_");
        return cardThumbName += '.webp';
    }

    useEffect(() => {
    }, []);
    
    return (
        <div onClick={() => clicked()} >
        <img alt='thumb' key={props.name} src={`${process.env.PUBLIC_URL}/assets/${cardThumbName()}`}/>
        </div>
    );
};

export default Card;