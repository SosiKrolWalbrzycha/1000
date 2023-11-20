import React, { useEffect, useState, useContext } from 'react'
import { DiceContext } from './App'





const Footer = props => {
    const { throwScore } = useContext(DiceContext);

    const ButtonGenerator = () => {
        return throwScore.map((item, index) => <button key={item[2]}>{item[0]} - zyskasz {item[1]} punktów, {item[2]}</button>);
    };

    return <div>pomoc: {throwScore.length > 0 ? ButtonGenerator() : ''}</div>;
}

export default Footer;
