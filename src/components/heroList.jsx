import React from 'react';
import HeroCard from './heroCard';

function HeroList({ heroes }) {
    return (
        <div className='hero-list'>
            {heroes.map((hero, index) => (
                <HeroCard
                    key={index}
                    name={hero.name}
                    universe={hero.universe}
                    alterego={hero.alterego}
                    occupation={hero.occupation}
                    friends={hero.friends}
                    superpowers={hero.superpowers}
                    url={hero.url}
                    info={hero.info}
                />
            ))}

        </div>
    )
}

export default HeroList;