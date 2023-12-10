import React, { useContext } from 'react'
import './scoreboard.scss'
import { DiceContext } from './App'

const Scoreboard = () => {
	const { sortedScores, sortByPoints, sortByName, sortByDate, sortNormally, scoreboard } = useContext(DiceContext)

	const showDate = e => {
		var timestamp = e
		var date = new Date(timestamp)
		return date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()
	}

	const makeList = () => {
		return sortedScores.map((score, id) => (
			<tr key={id} className='item'>
				<th className='firstcolumn'>
					<p className='data'>{score[0]} punktów</p>
				</th>
				<th className='firstcolumn'>
					<p className='data'>{score[1]}</p>
				</th>
				<th className='firstcolumn'>
					<p className='data'>{showDate(score[2])}</p>
				</th>
			</tr>
		))
	}

	return (
		<div className='scores'>
			<div className='scoreBoardHeader'>
				<h2>Lista Twoich wyników:</h2>
			
			</div>

			<table>
				<thead>
					<tr className='firstcolumname'>
						<th>
							<div>
								<p className='title'>Liczba punktów</p>
								<button className='sortBtn' onClick={sortByPoints}>
									<i class='fa-solid fa-arrow-down'></i>
								</button>
							</div>
						</th>
						<th className='firstcolumname'>
							<div>
								<p className='title'>Imię</p>
								<button className='sortBtn' onClick={sortByName}>
									<i class='fa-solid fa-arrow-down'></i>
								</button>
							</div>
						</th>
						<th className='firstcolumname'>
							{' '}
							<div>
								<p className='title'>Data</p>

								<button className='sortBtn' onClick={sortByDate}>
									<i class='fa-solid fa-arrow-down'></i>
								</button>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>{makeList()}</tbody>
			</table>
		</div>
	)
}
export default Scoreboard
