import React, { useState, useEffect, useContext } from 'react'
import './content.scss'
import { DiceContext } from './App'
import Footer from './footer.jsx'

const Content = props => {
	const { cubeScore, handleButton, checkTheSame, markedDices, setMarkedDices, throwNumber } = useContext(DiceContext)

	const markSingleDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
	
		if (markedDices[diceNumber] > 0) {
			console.log('wieksze');
			const newMarkedDices = [...markedDices];
			newMarkedDices[diceNumber] = 0;
			setMarkedDices(newMarkedDices);
		} else {
			console.log('mniejsze');
		const newMarkedDices = [...markedDices];
		newMarkedDices[diceNumber] = 1;
		setMarkedDices(newMarkedDices);
		}
	}






	const singleDiceScore = props =>
		props.map((score, index) => {
			if (score === 1) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-one active' : 'fa-solid fa-dice-one'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			} else if (score === 2) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-two active' : 'fa-solid fa-dice-two'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			} else if (score === 3) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-three active' : 'fa-solid fa-dice-three'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			} else if (score === 4) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-four active' : 'fa-solid fa-dice-four'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			} else if (score === 5) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-five active' : 'fa-solid fa-dice-five'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			} else if (score === 6) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-six active' : 'fa-solid fa-dice-six'}
						key={index}
						onClick={markSingleDice}
						data-key={index}></i>
				)
			}
		})

	
	

	useEffect(() => {
		if (cubeScore) {
			checkTheSame(cubeScore)
		}
	}, [cubeScore])

	return (
		<div className='diceScore'>
			<div className='dices'>{singleDiceScore(cubeScore)}</div>

			<button onClick={handleButton}>Rzuć kośćmi - to Twój rzut numer {throwNumber}</button>
		</div>
	)
}

export default Content
