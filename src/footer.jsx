import React, { useEffect, useState, useContext } from 'react'
import { DiceContext } from './App'

const Footer = props => {
	const { throwScore, cubeScore, setMarkedDices, markedDices, markedDicesScore, setMarkedDicesScore, throwNumber } =
		useContext(DiceContext)

	const newMarkedDices = [...markedDices]
	const newMarkedDicesScore = [...markedDicesScore]

	const markGroupDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))
		const diceScore = parseInt(e.target.getAttribute('data-value'))

		const diceNumbers = []

		for (let i = 0; i < cubeScore.length; i++) {
			if (cubeScore[i] === diceNumber) {
				diceNumbers.push(i)
			}
		}

		console.log(diceNumbers)

		for (let i = 0; i < diceNumbers.length; i++) {
			for (let a = 0; a < diceNumbers.length; a++) {
				for (let turn = [throwNumber]; turn < 4; turn++) newMarkedDices[turn][diceNumbers[a]] = 1
			}

			newMarkedDicesScore[throwNumber][diceNumbers[i]] = diceNumber
		}
		setMarkedDices(newMarkedDices)
		setMarkedDicesScore(newMarkedDicesScore)
	}

	const ButtonGenerator = () => {
		return throwScore.map((item, index) => (
			<button key={item[2]} data-key={item[2]} data-value={item[1]} onClick={markGroupDice}>
				{item[0]} - zyskasz {item[1]} punktów, {item[2]}
			</button>
		))
	}

	return <div>pomoc: {throwScore.length > 0 && throwNumber > 0 ? ButtonGenerator() : ''}</div>
}

export default Footer
