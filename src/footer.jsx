import React, { useEffect, useState, useContext } from 'react'
import { DiceContext } from './App'
import './footer.scss'
import { Tooltip } from 'react-tooltip'

const Footer = props => {
	const {
		throwScore,
		cubeScore,
		setMarkedDices,
		markedDices,
		markedDicesScore,
		setMarkedDicesScore,
		throwNumber,
		checkTheScore,
		setThrowScore,
		checkedNumbers,
		setCheckedNumbers,
		supportTeacher,
		support,
	} = useContext(DiceContext)

	const newMarkedDices = [...markedDices]
	const newMarkedDicesScore = [...markedDicesScore]
	const newCheckedNumbers = [...checkedNumbers]

	const markGroupDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
		const diceScore = parseInt(e.target.getAttribute('data-value'))
		const throwScoreIndex = parseInt(e.target.getAttribute('data-index'))

		let diceNumbers = []

		if (diceNumber === 7) {
			diceNumbers = [0, 1, 2, 3, 4]
		} else {
			for (let i = 0; i < cubeScore.length; i++) {
				if (cubeScore[i] === diceNumber) {
					diceNumbers.push(i)
				}
			}

			console.log(`diceNumbers ${diceNumbers}`)
		}

		for (let i = 0; i < diceNumbers.length; i++) {
			for (let a = 0; a < diceNumbers.length; a++) {
				for (let turn = [throwNumber]; turn < 4; turn++) newMarkedDices[turn][diceNumbers[a]] = 1
			}

			newMarkedDicesScore[throwNumber][diceNumbers[i]] = diceNumber
		}

		for (let x = 0; x < diceNumbers.length; x++) {
			newCheckedNumbers[throwNumber][diceNumbers[x]] = supportTeacher[throwNumber][diceNumbers[x]]
		}

		setCheckedNumbers(newCheckedNumbers)
		setMarkedDices(newMarkedDices)
		setMarkedDicesScore(newMarkedDicesScore)

		checkTheScore()
		usedTeacher(throwScoreIndex)
	}

	const usedTeacher = e => {
		const newThrowScore = [...throwScore]
		newThrowScore.splice(e, 1)
		setThrowScore(newThrowScore)
		ButtonGenerator()
	}

	const ButtonGenerator = () => {
		return throwScore.map((item, index) => (
			<button
				key={item[2]}
				data-key={item[2]}
				data-value={item[1]}
				data-index={index}
				onClick={markGroupDice}
				className='btn active'>
				{item[0]} - zyskasz {item[1]} punktów {index} numer {item[2]}
			</button>
		))
	}

	return (
		<div className={support === 1 ? 'diceTeacher active' : 'diceTeacher'}>
			<div className='firstLine'>
				<p>Twój wirtualny pomocnik:</p>
				<button
					className='support'
					data-tooltip-id='fourth-tooltip'
					data-tooltip-html='<div><h3>Wirtualny pomocnik</h3><p>Jeśli po rzucie nie wiesz jakie masz możliwości to poniżej wyśiwietlą się możliwości wraz z wynikiem. Po kliknięciu w przycisk podpowiedzi określone kości zostaną zaznaczone automatycznie.</p></div '
					data-tooltip-variant='success'>
					?
				</button>
				<Tooltip id='fourth-tooltip' place='top-end' className='supportWindow' events={['hover']} />
			</div>

			<div className='buttons'>{throwScore.length > 0 && throwNumber > 0 ? ButtonGenerator() : ''}</div>
		</div>
	)
}

export default Footer
