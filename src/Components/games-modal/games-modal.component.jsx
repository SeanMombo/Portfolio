import React from 'react';

import dieBanner from '../../img/DieAloneHero.jpg';
import tankBanner from '../../img/tinytanks.jpg';
import caveBanner from '../../img/cavewithrobots.png'

const GamesModal = () => (
    <div className="gameContainer">
        <a className="gameBanner" href="https://armorgames.com/die-alone-game/17875" target="_blank" rel='noopener noreferrer'> <img src={dieBanner} alt="Die alone, game thumbnail"/></a>
        <a className="gameBanner" href="https://www.miniclip.com/games/cave-with-robots/en/" target="_blank" rel='noopener noreferrer'> <img src={caveBanner} alt="Cave With Robots, game thumbnail"/></a>
        <a className="gameBanner" href="https://www.addictinggames.com/shooting/tiny-tanks" target="_blank" rel='noopener noreferrer'> <img src={tankBanner} alt="Tiny Tanks, game thumbnail"/></a>
    </div>
);

export default GamesModal;