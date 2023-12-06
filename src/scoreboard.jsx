import React, { useContext } from 'react'
import './scoreboard.scss'
import { DiceContext } from './App'

const Scoreboard = () => {
	const { sortedScores,
        sortByPoints,
        sortByName,
        sortByDate,
        sortNormally } = useContext(DiceContext)

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
				<th className='firstcolumname'>
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
			<h2>Lista najlepszych wyników: <button onClick={sortNormally}>nie sortuj</button></h2>

			<table>
				<thead>
					<tr>
						<th className='firstcolumn'>
							<p className='title'>Liczba punktów</p> <button onClick={sortByPoints}>sort</button>
						</th>
						<th className='firstcolumn'>
							<p className='title'>Imię</p><button onClick={sortByName}>sort</button>
						</th>
						<th className='firstcolumn'>
							<p className='title'>Data</p><button onClick={sortByDate}>sort</button>
						</th>
					</tr>
				</thead>
				<tbody>{makeList()}</tbody>
			</table>
		</div>
	)
}
export default Scoreboard
