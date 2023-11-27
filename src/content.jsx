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
		checkedNumbers, setCheckedNumbers, handleButtonAll
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
			} else if (score === 6) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-six active' : 'fa-solid fa-dice-six'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={6}></i>
				)
			} else if(score === 5) {
				return (
					<i
						className={markedDices[throwNumber][index] === 1 ? 'fa-solid fa-dice-five active' : 'fa-solid fa-dice-five'}
						key={index}
						onClick={markSingleDice}
						data-key={index}
						data-value={5}></i>
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

	const isEqualArray = (a, b) => 
    a.length === b.length && a.every((value, index) => value === b[index]);

	const isArrayNotEmpty = (array) => {return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}

	return (
		<div className='diceScore'>
			<div className='firstLine'><p>Jestes po rzucie numer: {throwNumber}</p><p>Łączny wynik: {
				scoreNumber.reduce((accumulator, currentValue) => {
				return accumulator + currentValue
			}, 0)} pkt</p></div>
			<p >Zaznacz kości które dadzą Ci punkty i chcesz pozostawić:</p>
			<div className='dices'>{singleDiceScore(cubeScore)}</div>
			<div className='buttons'>

			<button className={throwNumber === 0 ? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzuć kośćmi 1
			</button>
			<button className={throwNumber === 1 && scoreNumber[throwNumber-1] > 0? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzucaj! Rzut numer 2.
			</button>
			<button className={throwNumber === 2 && scoreNumber[throwNumber-1] > 0? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
				Rzuć kośćmi 3
			</button>
			<button className={throwNumber === 3 && scoreNumber[throwNumber-1] > 0? 'throwButton activeButton' : 'throwButton'}>
				Wykorzystałeś trzy rzuty
			</button>
			
			{/* <button className={isEqualArray(markedDices[throwNumber], [1, 1, 1, 1, 1]) && isArrayNotEmpty(markedDicesScore[throwNumber])? 'throwButton activeButton' : 'throwButton'} onClick={handleButtonAll}>
				Wykonaj rzut wszystkimi koścmi
			</button> */}
			</div>
			<div className={throwNumber > 0 ? 'score scoreActive' : 'score'}>
			</div>
			



		</div>
	)
}

export default Content
