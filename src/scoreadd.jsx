import React, { useState, useEffect, useContext } from 'react'
import './scoreadd.scss'
import { DiceContext } from './App'

const Scoreadd = () =>
{
    const { scoreNumber, adToScoreboard, scoreAddVisible, name,addName } = useContext(DiceContext)

    return (
        <div className={scoreAddVisible === false? 'addscore' : 'addscore active'}>
            <h1>Zapisz swój wynik w tabeli:</h1>
            <h2>{scoreNumber.reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0)}{' '}
						pkt</h2>
                        <form action="">
                            <label htmlFor="imie">
                                <p>Podaj swoje imię:</p>
                            </label>
                            <input type="text" id="imie" onChange={addName} value={name} placeholder='Wpisz tutaj swoje imię'/>
                            <button className='addscorebutton' onClick={adToScoreboard}>Dodaj wynik</button>
                        </form>
                       
        </div>
    )

}
export default Scoreadd