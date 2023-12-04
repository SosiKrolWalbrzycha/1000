import React, { useEffect, useContext } from 'react'
import './navbar.scss'
import logo from './dices.png'
import { Tooltip } from 'react-tooltip'
import { DiceContext } from './App'

const Navbar = () => {
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
		checkTheScore,
		supportTeacher,
		setSupportTeacher,
		setThrowScore,
		setMerkedDices,
		checkedNumbers,
		setCheckedNumbers,
		setCubeScore,
		handleButtonAll,
		support,
		setSupport,
	} = useContext(DiceContext)

	// useEffect(() => {
	//     console.log('Navbar został zamontowany.');
	//   }, []);
	//   useEffect(() => {
	//     console.log('Navbar został zrenderowany.');
	//   },);

	const handleRange = (e) => {
		setSupport(parseInt(e.target.value))
	}

	return (
		<div className='navbar'>
			<div className='navtext'>
				<div className='logo'>
					<img src={logo} alt='Dices Logo' />
				</div>
				<div className='title'>
					<h1>Nauka Tysiąca</h1>
					<p>Masz tylko trzy rzuty!</p>
				</div>
				<div>
					<button
						className='support'
						data-tooltip-id='my-tooltip'
						data-tooltip-html='<div><h3>O co chodzi?</h3><p>Oddaję w Twoje ręce aplikację uczącą gry w tysiąca. Zasady tej gry sa proste. Gracz otrzymuje pięć kości i dokonuje pierwszego rzutu za pomocą wszystkich z nich. Ma on prawo do kolejnych rzutów, ale tylko wtedy, gdy posiada jakiś układ wyrzucony za jednym razem. Za układy uznaje się: każdą jedynkę lub piątkę, co najmniej trzy takie same oczka i tzw. strita, czyli pięć oczek po kolei. Gracz odkłada (zaznacza) kości które tworzyły układ i może rzucać resztą kości. Jeśli wszystkie pięć kostek tworzy układ lub gracz odłożył wszystkie swoje kości to uzyskany wyniok można zapisać w tabeli wyników.</p></div '
						data-tooltip-variant='success'>
						?
					</button>
					<Tooltip id='my-tooltip' place='bottom-end' className='supportWindow' events={['hover']} />
				</div>
			</div>

			<div className='range'>
				<p>Zadecyduj czy potrzebujesz pomocy</p>
				<input className='rangeinput' type='range' min='0' max='1' value={support} onChange={handleRange}/>
			</div>
		</div>
	)
}

export default Navbar
