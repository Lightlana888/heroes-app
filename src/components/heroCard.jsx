import React from 'react';

function HeroCard(props) {
    const { name, universe, alterego, occupation, friends, superpowers, url, info } = props;
    return (
        <div className='hero-card'>
            <h2><strong>{name}</strong></h2>
            <p><strong>Вселенная:</strong>{universe}</p>
            <p><strong>Альтерэго:</strong>{alterego}</p>
            <p><strong>Профессия:</strong>{occupation}</p>
            <p><strong>Друзья:</strong>{friends}</p>
            <p><strong>Суперсила:</strong>{superpowers}</p>
            <img src={url} alt={name}></img>
            <p><strong>Информация:</strong>{info}</p>
        </div>
    )
}

export default HeroCard;