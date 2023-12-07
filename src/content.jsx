import React, { useState, useEffect, useContext } from 'react'
import './content.scss'
import { DiceContext } from './App'
import Footer from './footer.jsx'
import { Tooltip } from 'react-tooltip'

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
		setThrowNumber,
		checkTheScore,
		supportTeacher,
		setSupportTeacher,
		setThrowScore,
		setMerkedDices,
		checkedNumbers,
		setCheckedNumbers,
		setCubeScore,
		handleButtonAll,
		setScoreNumber,
		resetState,
		adToScoreboard, showAddScore
		
	} = useContext(DiceContext)

	const markSingleDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
		const diceScore = parseInt(e.target.getAttribute('data-value'))

		if (markedDices[throwNumber][diceNumber] < 1 && throwNumber > 0) {
			const newMarkedDices = [...markedDices]
			const newMarkedDicesScore = [...markedDicesScore]
			const newCheckedNumbers = [...checkedNumbers]

			for (let i = throwNumber; i < 4; i++) {
				newMarkedDices[i][diceNumber] = 1
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
				newMarkedDices[i][diceNumber] = 0
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
			} else if (score === 5) {
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
		if (throwNumber > 0) {
		if (cubeScore) {
			const newSupportTeacher = [...supportTeacher]

			for (let n = 0; n < 5; n++) {
				if (markedDices[throwNumber][n] === 0) {
					newSupportTeacher[throwNumber][n] = cubeScore[n]
				} else {
					newSupportTeacher[throwNumber][n] = 0
				}
			}

			setSupportTeacher(newSupportTeacher)

			checkTheSame(newSupportTeacher[throwNumber])
		}
	}}, [cubeScore])

	const isEqualArray = (a, b) => a.length === b.length && a.every((value, index) => value === b[index])

	const isArrayNotEmpty = array => {
		return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	}

	let message

	if (throwNumber === 0) {
		message = 'Pora oddać pierwszy rzut!'
	} else if (throwNumber > 0 && scoreNumber[throwNumber - 1] === 0) {
		message = 'Aby oddać kolejny rzut zaznacz przynajmniej jedną kość, która da Ci punkty:'
	} else if (throwNumber > 0 && scoreNumber[throwNumber - 1] > 0) {
		message = 'Teraz możesz oddać rzut niezaznaczonymi kośćmi'
	}



	return (
		<div className='diceScore'>
			<div className='firstLine'>
				<div className='line'>
					<p>Jestes po rzucie numer: {throwNumber}</p>
					<button
						className='support'
						data-tooltip-id='second-tooltip'
						data-tooltip-html='<div><h3>Numer rzutu</h3><p>Obok widzisz numer rzutu który właśnie wykonałeś. Jesli jesteś po rzucie 0 to aplikacja oczekuje na Twój pierwszy rzut. Pamiętaj masz maksymalnie trzy rzuty.</p></div '
						data-tooltip-variant='success'>
						?
					</button>
					<Tooltip id='second-tooltip' place='bottom-start' className='supportWindow' events={['hover']} />
				</div>
				<div className='line'>
					<p>
						Łączny wynik:{' '}
						{scoreNumber.reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0)}{' '}
						pkt
					</p>
					<button
						className='support'
						data-tooltip-id='third-tooltip'
						data-tooltip-html='<div><h3>Łączny wynik</h3><p>Obok widzisz łaczną liczbę punktów, które udało Ci się zgromadzić na zaznaczonych kościach. Aplikacja automatycznie sumuje wyniki wszytskich trzech wykonanych rzutów. Pamiętaj, że wyniki potrójne i większe (poczwórne,popiątne) oraz streety liczą się tylko wtedy gdy sa osiągnięte w jednym rzucie.</p></div '
						data-tooltip-variant='success'>
						?
					</button>
					<Tooltip id='third-tooltip' place='bottom-end' className='supportWindow' events={['hover']} />
				</div>
			</div>
			<p>{message}</p>
			<div className='dices'>{singleDiceScore(cubeScore)}</div>
			<div className='buttons'>
				<button className={throwNumber === 0 ? 'throwButton activeButton' : 'throwButton'} onClick={handleButton}>
					Rzuć kośćmi - rzut numer {throwNumber + 1}
				</button>

				<button
					className={
						(throwNumber === 0 || throwNumber === 1 || throwNumber === 2) && scoreNumber[throwNumber - 1] > 0 && markedDices[throwNumber].reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0) < 5
							? 'throwButton activeButton'
							: 'throwButton'
					}
					onClick={handleButton}>
					Rzuć kośćmi - rzut numer {throwNumber + 1}
				</button>

				<button onClick={showAddScore} 
					className={
						throwNumber === 3 && scoreNumber[throwNumber - 1] > 0 ? 'throwButton activeButton' : 'throwButton'
					}>
					Trzy rzuty i wynik{' '}
					{scoreNumber.reduce((accumulator, currentValue) => {
						return accumulator + currentValue
					}, 0)}{' '}
					pkt. Kliknij aby zapisać wynik.
				</button>
				<button
					className={
						(throwNumber === 1 || throwNumber === 2 || throwNumber === 3) &&
						scoreNumber[throwNumber - 1] === 0 &&
						markedDices[throwNumber].reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0) >
							markedDices[throwNumber - 1].reduce((accumulator, currentValue) => {
								return accumulator + currentValue
							}, 0)
							? 'throwButton activeButton'
							: 'throwButton'
					} onClick={resetState}>
					Jeśli nie zaznaczysz układu będzie fura - kliknij aby zacząć od nowa
				</button>
				<button onClick={showAddScore}
					className={
						(throwNumber === 1 || throwNumber === 2) &&
						markedDices[throwNumber].reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0) === 5 &&
						markedDices[throwNumber].reduce((accumulator, currentValue) => {
							return accumulator + currentValue
						}, 0) >
							markedDices[throwNumber - 1].reduce((accumulator, currentValue) => {
								return accumulator + currentValue
							}, 0) &&
						scoreNumber[throwNumber - 1] > 0
							? 'throwButton activeButton'
							: 'throwButton'
					}>
					Zaznaczyłeś wszystkie kości - możesz zapisać wynik.
				</button>
			</div>
			<div className={throwNumber > 0 ? 'score scoreActive' : 'score'}></div>
		</div>
	)
}

export default Content
