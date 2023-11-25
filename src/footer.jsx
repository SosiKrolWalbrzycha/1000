import React, { useEffect, useState, useContext } from 'react'
import { DiceContext } from './App'
import './footer.scss'


const Footer = props => {
	const { throwScore, cubeScore, setMarkedDices, markedDices, markedDicesScore, setMarkedDicesScore, throwNumber, checkTheScore, setThrowScore, checkedNumbers, setCheckedNumbers, supportTeacher } =
		useContext(DiceContext)

	const newMarkedDices = [...markedDices]
	const newMarkedDicesScore = [...markedDicesScore]
	const newCheckedNumbers = [...checkedNumbers]

	const markGroupDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
		const diceScore = parseInt(e.target.getAttribute('data-value'))
		const throwScoreIndex = parseInt(e.target.getAttribute('data-index'))
		

		const diceNumbers = []

		for (let i = 0; i < cubeScore.length; i++) {
			if (cubeScore[i] === diceNumber) {
				diceNumbers.push(i)
			}
		}

		console.log(`diceNumbers ${diceNumbers}`)


		for (let i = 0; i < diceNumbers.length; i++) {
			for (let a = 0; a < diceNumbers.length; a++) {
				for (let turn = [throwNumber]; turn < 4; turn++) newMarkedDices[turn][diceNumbers[a]] = 1
			}

			newMarkedDicesScore[throwNumber][diceNumbers[i]] = diceNumber
		}


		for (let x = 0; x < diceNumbers.length; x++) {
			newCheckedNumbers[throwNumber][diceNumbers[x]]=supportTeacher[throwNumber][diceNumbers[x]];
		}

		setCheckedNumbers(newCheckedNumbers)
		setMarkedDices(newMarkedDices)
		setMarkedDicesScore(newMarkedDicesScore)


	


		checkTheScore()
		usedTeacher(throwScoreIndex)
	}

	const usedTeacher = e => {
		const newThrowScore = [...throwScore];
		newThrowScore.splice(e,1);
		setThrowScore(newThrowScore)
		ButtonGenerator()
	} 

	const ButtonGenerator = () => {
		return throwScore.map((item, index) => (
			<button key={item[2]} data-key={item[2]} data-value={item[1]} data-index={index} onClick={markGroupDice} className='btn active'>
				{item[0]} - zyskasz {item[1]} punktów {index} numer {item[2]}
			</button>
		))
	}

	return <div className='diceTeacher'>
		
		<div className='firstLine'>
			<p>Jeśli nie wiesz o co chodzi to proponuję pomoc:</p>
		</div>
		
		<div className='buttons'>{throwScore.length > 0 && throwNumber > 0 ? ButtonGenerator() : ''}</div>
		
		</div>
}

export default Footer
