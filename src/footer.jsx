import React, { useEffect, useState, useContext } from 'react'
import { DiceContext } from './App'

const Footer = props => {
	const { throwScore, cubeScore, setMarkedDices, markedDices } = useContext(DiceContext)

	const newMarkedDices = [...markedDices]

	const markGroupDice = e => {
		const diceNumber = parseInt(e.target.getAttribute('data-key'))

		const diceNumbers = []
		for (let i = 0; i < cubeScore.length; i++) {
			if (cubeScore[i] === diceNumber) {
				diceNumbers.push(i)
			}
		}

		for (let i = 0; i < diceNumbers.length; i++) {
			newMarkedDices[diceNumbers[i]] = 1
		}
		setMarkedDices(newMarkedDices)
	}

	const ButtonGenerator = () => {
		return throwScore.map((item, index) => (
			<button key={item[2]} data-key={item[2]} onClick={markGroupDice}>
				{item[0]} - zyskasz {item[1]} punktów, {item[2]}
			</button>
		))
	}

	return <div>pomoc: {throwScore.length > 0 ? ButtonGenerator() : ''}</div>
}

export default Footer
