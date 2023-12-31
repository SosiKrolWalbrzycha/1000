import './App.scss'
import React, { useEffect, useState } from 'react'
import Navbar from './navbar.jsx'
import Content from './content.jsx'
import Footer from './footer.jsx'
import Scoreadd from './scoreadd.jsx'
import Scoreboard from './scoreboard.jsx'
import { current } from '@reduxjs/toolkit'
export const DiceContext = React.createContext()

function App() {
	const [cubeScore, setCubeScore] = useState([1, 1, 1, 1, 1])
	const [throwScore, setThrowScore] = useState([])
	const [markedDices, setMarkedDices] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	])
	const [markedDicesScore, setMarkedDicesScore] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	])
	const [throwNumber, setThrowNumber] = useState(0)
	const [scoreNumber, setScoreNumber] = useState([0, 0, 0])
	const [supportTeacher, setSupportTeacher] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	])
	const [checkedNumbers, setCheckedNumbers] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	])

	const [scoreboard, setScoreboard] = useState(JSON.parse(localStorage.getItem('1000score')) || [])

	const [support, setSupport] = useState(0)

	const [sortedScores, setSortedScores] = useState(scoreboard)

	const [scoreAddVisible, setScoreAddVisible] = useState(false)

	const [name,setName] = useState('')

	useEffect(() => {sortNormally()}, [scoreboard])

	const addName = e => {
		const newName = e.target.value
		setName(newName)
	}

	const showAddScore = () => {
		setScoreAddVisible(true)
	}

	const adToScoreboard = event => {
		event.preventDefault();
		let scoreInStorage = JSON.parse(localStorage.getItem('1000score')) || [];

	

		const currentDate = Date.now();
		const newScoreBoard = [...scoreboard]
		const scoreToAd = scoreNumber.reduce((accumulator, currentValue) => {
			return accumulator + currentValue
		}, 0);

		newScoreBoard.push([scoreToAd, name, currentDate])
		console.log(scoreInStorage);


		scoreInStorage.push([scoreToAd, name, currentDate])
		localStorage.setItem('1000score', JSON.stringify(scoreInStorage) );


		setScoreAddVisible(false)
		setScoreboard(newScoreBoard)
		resetState()
	}

	const sortByPoints = () => {
		const sorted = [...scoreboard].sort((a, b) => b[0] - a[0])
		setSortedScores(sorted)
	}

	const sortByName = () => {
		const sorted = [...scoreboard].sort((a, b) => a[1].localeCompare(b[1]))
		setSortedScores(sorted)
	}

	const sortByDate = () => {
		const sorted = [...scoreboard].sort((a, b) => new Date(a[2]) - new Date(b[2]));
		setSortedScores(sorted);
	  };

	  const sortNormally = () =>{
		const sorted = [...scoreboard]
		setSortedScores(sorted);
	  }

	const resetState = () => {
		setThrowNumber(0)
		setScoreNumber([0, 0, 0])

		setMarkedDices([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		])
		setMarkedDicesScore([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		])
		setSupportTeacher([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		])
		setCheckedNumbers([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		])
		setCubeScore([1, 1, 1, 1, 1])

		setName('')
	}

	const checkTheSame = array => {
		const counts = {}
		for (const number of array) {
			counts[number] = counts[number] ? counts[number] + 1 : 1
		}

		console.log(counts)

		let updatedThrowScore = []
		const smallStreet = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }
		const bigStreet = { 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }

		function matchesPattern(obj, pattern) {
			for (let key in pattern) {
				if (!obj[key] || obj[key] < pattern[key]) {
					return false
				}
			}
			return true
		}

		if (matchesPattern(counts, smallStreet) || matchesPattern(counts, bigStreet)) {
			updatedThrowScore.push(['Street', 150, 7])
		}

		if (counts[1] === 1) {
			updatedThrowScore.push(['Jedna jedynka', 10, 1])
		}

		if (counts[1] === 2) {
			updatedThrowScore.push(['Dwie jedynki', 20, 1])
		}

		if (counts[1] === 3) {
			updatedThrowScore.push(['Trzy jedynki', 100, 1])
		}

		if (counts[1] === 4) {
			updatedThrowScore.push(['Cztery jedynki', 200, 1])
		}

		if (counts[1] === 5) {
			updatedThrowScore.push(['Poker jedynek', 400, 1])
		}

		if (counts[5] === 1) {
			updatedThrowScore.push(['Jedna piątka', 5, 5])
		}

		if (counts[5] === 2) {
			updatedThrowScore.push(['Dwie piątki', 10, 5])
		}

		if (counts[5] === 3) {
			updatedThrowScore.push(['Trzy piątki', 50, 5])
		}

		if (counts[5] === 4) {
			updatedThrowScore.push(['Cztery piątki', 100, 5])
		}

		if (counts[5] === 5) {
			updatedThrowScore.push(['Poker piątek', 200, 5])
		}

		if (counts[6] === 3) {
			updatedThrowScore.push(['Trzy szóstki', 60, 6])
		}

		if (counts[6] === 4) {
			updatedThrowScore.push(['Cztery szóstki', 120, 6])
		}

		if (counts[6] === 5) {
			updatedThrowScore.push(['Poker szóstek', 240, 6])
		}
		if (counts[4] === 3) {
			updatedThrowScore.push(['Trzy czwórki', 40, 4])
		}

		if (counts[4] === 4) {
			updatedThrowScore.push(['Cztery czwórki', 80, 4])
		}

		if (counts[4] === 5) {
			updatedThrowScore.push(['Poker czwórki', 160, 4])
		}

		if (counts[3] === 3) {
			updatedThrowScore.push(['Trzy trójki', 30, 3])
		}

		if (counts[3] === 4) {
			updatedThrowScore.push(['Cztery trójki', 60, 3])
		}

		if (counts[3] === 5) {
			updatedThrowScore.push(['Poker trójki', 90, 3])
		}

		if (counts[2] === 3) {
			updatedThrowScore.push(['Trzy dwójki', 20, 2])
		}

		if (counts[2] === 4) {
			updatedThrowScore.push(['Cztery dwójki', 40, 2])
		}

		if (counts[2] === 5) {
			updatedThrowScore.push(['Poker dwójki', 60, 2])
		}
		setThrowScore(updatedThrowScore)
	}

	const newScoreNumber = [0, 0, 0]

	const checkTheScore = () => {
		const mstreet = [1, 2, 3, 4, 5]
		const dstreet = [2, 3, 4, 5, 6]

		for (let a = throwNumber; a > 0; a--) {
			const counts = {}

			for (const number of checkedNumbers[a]) {
				counts[number] = counts[number] ? counts[number] + 1 : 1
			}

			let updatedThrowScore = []

			const smallStreet = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }
			const bigStreet = { 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }

			function matchesPattern(obj, pattern) {
				for (let key in pattern) {
					if (!obj[key] || obj[key] < pattern[key]) {
						return false
					}
				}
				return true
			}

			if (matchesPattern(counts, smallStreet) || matchesPattern(counts, bigStreet)) {
				updatedThrowScore.push(150)
			} else {
				if (counts[1] === 1) {
					updatedThrowScore.push(10)
				}

				if (counts[1] === 2) {
					updatedThrowScore.push(20)
				}

				if (counts[1] === 3) {
					updatedThrowScore.push(100)
				}

				if (counts[1] === 4) {
					updatedThrowScore.push(200)
				}

				if (counts[1] === 5) {
					updatedThrowScore.push(400)
				}

				if (counts[5] === 1) {
					updatedThrowScore.push(5)
				}

				if (counts[5] === 2) {
					updatedThrowScore.push(10)
				}

				if (counts[5] === 3) {
					updatedThrowScore.push(50)
				}

				if (counts[5] === 4) {
					updatedThrowScore.push(100)
				}

				if (counts[5] === 5) {
					updatedThrowScore.push(200)
				}

				if (counts[6] === 3) {
					updatedThrowScore.push(60)
				}

				if (counts[6] === 4) {
					updatedThrowScore.push(120)
				}

				if (counts[6] === 5) {
					updatedThrowScore.push(240)
				}
				if (counts[4] === 3) {
					updatedThrowScore.push(40)
				}

				if (counts[4] === 4) {
					updatedThrowScore.push(80)
				}

				if (counts[4] === 5) {
					updatedThrowScore.push(160)
				}

				if (counts[3] === 3) {
					updatedThrowScore.push(30)
				}

				if (counts[3] === 4) {
					updatedThrowScore.push(60)
				}

				if (counts[3] === 5) {
					updatedThrowScore.push(90)
				}

				if (counts[2] === 3) {
					updatedThrowScore.push(20)
				}

				if (counts[2] === 4) {
					updatedThrowScore.push(40)
				}

				if (counts[2] === 5) {
					updatedThrowScore.push(60)
				}
			}

			const sum = updatedThrowScore.reduce((accumulator, currentValue) => {
				return accumulator + currentValue
			}, 0)

			newScoreNumber[a - 1] = sum
			setScoreNumber(newScoreNumber)
		}

		console.log(newScoreNumber)
	}

	const handleButton = () => {
		const newCubeScore = [...cubeScore]

		for (let i = 0; i < cubeScore.length; i++) {
			if (markedDices[throwNumber][i] === 0) {
				newCubeScore[i] = Math.floor(Math.random() * 6) + 1
			}
		}

		setCubeScore(newCubeScore)
		setThrowNumber(prevState => prevState + 1)
	}
	const handleButtonAll = () => {
		setThrowNumber(prevState => prevState + 1)

		const newCubeScore = []

		for (let i = 0; i < cubeScore.length; i++) {
			{
				newCubeScore[i] = Math.floor(Math.random() * 6) + 1
			}
		}

		setCubeScore(newCubeScore)
	}

	return (
		<div className='App'>
			<DiceContext.Provider
				value={{
					cubeScore,
					setCubeScore,
					handleButton,
					checkTheSame,
					throwScore,
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
					checkedNumbers,
					setCheckedNumbers,
					handleButtonAll,
					support,
					setSupport,
					resetState,
					scoreboard,
					adToScoreboard,sortedScores,
					sortByPoints,
					sortByName,
					sortByDate,
					sortNormally,scoreAddVisible, showAddScore,
					name,setName, addName, scoreboard
				}}>
				<Navbar />
				<Content />
				<Footer />
				<Scoreboard />
				<Scoreadd />
			</DiceContext.Provider>
		</div>
	)
}

export default App
