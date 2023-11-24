import './App.scss'
import React, { useEffect, useState } from 'react'
import Navbar from './navbar.jsx'
import Content from './content.jsx'
import Footer from './footer.jsx'
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

	const checkTheSame = array => {
		const counts = {}

		const points = 0
		for (const number of array) {
			counts[number] = counts[number] ? counts[number] + 1 : 1
		}

		let updatedThrowScore = []

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

	const newScoreNumber = [0,0,0]


	const checkTheScore = () => {

		for (let a = throwNumber; a > 0; a--) {
			const counts = {}


			for (const number of markedDicesScore[a]) {
				counts[number] = counts[number] ? counts[number] + 1 : 1
			}

			let updatedThrowScore = []

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

			const sum = updatedThrowScore.reduce((accumulator, currentValue) => {
				return accumulator + currentValue
			}, 0)

			
			newScoreNumber[a-1]=sum
			
		}
		
		console.log(newScoreNumber);
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
				}}>
				<Navbar />
				<Content />
				<Footer />
			</DiceContext.Provider>
		</div>
	)
}

export default App
