import React, { useState, useEffect, useContext } from 'react'
import './content.scss'
import { DiceContext } from './App'
import Footer from './footer.jsx'

const Content = props => {
	const {
		cubeScore,
		handleButton,
		checkTheSame,
		markedDices,
		setMarkedDices,
		throwNumber,
		scoreNumber,
		markedDicesScore,
		setMarkedDicesScore,
		checkTheScore,
		supportTeacher,
		setSupportTeacher,
		setThrowScore,
		checkedNumbers, setCheckedNumbers
	} = useContext(DiceContext)

	const markSingleDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
		const diceScore = parseInt(e.target.getAttribute('data-value'))

		if (markedDices[throwNumber][diceNumber] < 1 && throwNumber > 0) {
			const newMarkedDices = [...markedDices]
			const newMarkedDicesScore = [...markedDicesScore]
			const newCheckedNumbers = [...checkedNumbers]

			for (let i = throwNumber; i < 4; i++) {
				newMarkedDices[i][diceNumber] = 1;
				newCheckedNumbers[throwNumber][diceNumber] = diceScore
			}

			newMarkedDicesScore[throwNumber][diceNumber] = diceScore
			setMarkedDices(newMarkedDices)
			setMarkedDicesScore(newMarkedDicesScore)
		} else {
			const newMarkedDices = [...markedDices]
			const newMarkedDicesScore = [...markedDicesScore]
			const newCheckedNumbers = [...checkedNumbers]
			for (let i = throwNumber; i < 4; i++) {
				newMarkedDices[i][diceNumber] = 0;
				newCheckedNumbers[throwNumber][diceNumber] = 0
			}
			newMarkedDicesScore[throwNumber][diceNumber] = 0
			setMarkedDices(newMarkedDices)
			setMarkedDicesScore(newMarkedDicesScore)
			setCheckedNumbers(newCheckedNumbers)
			
		}
		checkTheScore()
	}

	const singleDiceScore = props =>
		props.map((score, index) => {
			if (score === 1) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-one active' : 'fa-solid fa-dice-one'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={1}></i>
				)
			} else if (score === 2) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-two active' : 'fa-solid fa-dice-two'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={2}></i>
				)
			} else if (score === 3) {
				return (
					<i
						className={
							markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-three active' : 'fa-solid fa-dice-three'
						}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={3}></i>
				)
			} else if (score === 4) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-four active' : 'fa-solid fa-dice-four'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={4}></i>
				)
			} else if (score === 5) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-five active' : 'fa-solid fa-dice-five'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={5}></i>
				)
			} else if (score === 6) {
				return (
					<i
						className={markedDices[index] === 1 ? 'fa-solid fa-dice-six active' : 'fa-solid fa-dice-six'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={6}></i>
				)
			}
		})

	useEffect(() => {
		if (cubeScore) {
			const newSupportTeacher = [...supportTeacher]

			for (let n = 0; n < 5; n++) {

if (markedDices[throwNumber][n] === 0)
{newSupportTeacher[throwNumber][n] = cubeScore[n]}
else {newSupportTeacher[throwNumber][n] = 0}
			}

			setSupportTeacher(newSupportTeacher)

			checkTheSame(newSupportTeacher[throwNumber])
		}
	}, [cubeScore])

	return (
		<div className='diceScore'>
			<div className='firstLine'><p>Jestes po rzucie numer: {throwNumber}</p><p>Łączny wynik: {
				scoreNumber.reduce((accumulator, currentValue) => {
				return accumulator + currentValue
			}, 0)} pkt</p></div>
			<p>Jaka faza gry: rzuć / zaznacz / policz punkty</p>
			<div className='dices'>{singleDiceScore(cubeScore)}</div>
			<div className='buttons'>

			<button className={throwNumber === 0 ? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzuć kośćmi 1
			</button>
			<button className={throwNumber === 1 ? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzucaj! Rzut numer 2.
			</button>
			<button className={throwNumber === 2 ? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzuć kośćmi 3
			</button>
			<button className={throwNumber === 3 ? 'throwButton activeButton' : 'throwButton'}>
				Wykorzystałeś trzy rzuty
			</button>
			</div>
			<div className={throwNumber > 0 ? 'score scoreActive' : 'score'}>
			</div>
			



		</div>
	)
}

export default Content
