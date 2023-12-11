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
				<i class="fa-solid fa-dice"></i>
				</div>
				<div className='title'>
					<h1>Nauka Tysiąca</h1>
					<p>Masz tylko trzy rzuty!</p>
				</div>
				<div>
					<button
						className='support'
						data-tooltip-id='my-tooltip'
						data-tooltip-html='<div><h3>O co chodzi?</h3><p>Oddaję w Twoje ręce aplikację uczącą gry w tysiąca. Zasady tej gry są bardzo proste. Gracz otrzymuje pięć kości i dokonuje pierwszego rzutu za pomocą wszystkich z nich. Ma on prawo do kolejnych rzutów, ale tylko wtedy, gdy posiada jakiś układ wyrzucony za pierwszym razem. Za układy uznaje się: każdą jedynkę lub piątkę, co najmniej trzy takie same oczka i tzw. strita, czyli pięć oczek po kolei. Gracz odkłada (zaznacza) kości które tworzyły układ i może rzucać resztą kości. Grę kończysz gdy wszystkie pięć kostek tworzy układ lub gracz odłożył wszystkie swoje kości (w dowolnych układach). Uzyskany wynik można zapisać w tabeli wyników, przypisanych do tej przeglądarki. Pamiętaj - czasami warto nie zaznaczć kiepskiego układu (np. piątki) aby potem wykorzystać lepiej potencjał pozostałych kości. </p></div '
						data-tooltip-variant='success'>
					<i className='fa-solid fa-question'></i>
					</button>
					<Tooltip id='my-tooltip' place='bottom-end' className='supportWindow' events={['hover']} />
				</div>
			</div>

			<div className='range'>
				<h2>Zadecyduj czy potrzebujesz pomocy:</h2>
				<div className='switcher'><p className='txt'>NIE</p><input className='rangeinput' type='range' min='0' max='1' value={support} onChange={handleRange}/><p className='txt'>TAK</p></div>
				
				
			</div>
		</div>
	)
}

export default Navbar
