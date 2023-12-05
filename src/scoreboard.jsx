import React, {useContext} from 'react'
import './scoreboard.scss'
import { DiceContext } from './App'

const Scoreboard = () => {
	const { scoreboard } = useContext(DiceContext)

    const makeList = () => {
       return scoreboard.map((score, id) => (
        <div key={id} className='item'>
            <p>{score[0]} punktów</p>
            <p>{score[1]}</p>
            <p>{score[2]}</p>
            </div>
        ))}
   

	return (
		<div className='scores'>
			<p>Lista najlepszych wyników:</p>
            {makeList()}
		</div>
	)
}
export default Scoreboard
