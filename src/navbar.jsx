import React, { useEffect } from 'react'
import './navbar.scss'
import logo from './dices.png'
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
	// useEffect(() => {
	//     console.log('Navbar został zamontowany.');
	//   }, []);
	//   useEffect(() => {
	//     console.log('Navbar został zrenderowany.');
	//   },);

	return (
		<div className='navbar'>
			<div className='logo'>
				<img src={logo} alt='Dices Logo' />
			</div>
			<div className='title'>
				<h1>Nauka Tysiąca</h1>
				<p>Masz tylko trzy rzuty!</p>
			</div>
			<div></div>

			<button className="support" data-tooltip-id="my-tooltip" data-tooltip-html="<div><h3>O co chodzi?</h3><p>Oddaję w Twoje ręce aplikację uczącą gry w tysiąca. Zasady tej gry sa proste. Gracz otrzymuje pięć kości i dokonuje pierwszego rzutu za pomocą wszystkich z nich. Ma on prawo do kolejnych rzutów, ale tylko wtedy, gdy posiada jakiś układ wyrzucony za jednym razem. Za układy uznaje się: każdą jedynkę lub piątkę, co najmniej trzy takie same oczka i tzw. strita, czyli pięć oczek po kolei. Gracz odkłada kości które tworzyły układ i może rzucać resztą kości. Jeśli wszystkie pięć kostek tworzy układ lub gracz odłożył wszystkie swoje kości to może powtórzyć rzut wszystkimi. Gdy w którymkolwiek rzucie nie znajdzie się żaden układ gracz traci wszystkie uzyskane punkty.</p></div " data-tooltip-variant="success">?</button>
            <Tooltip id="my-tooltip" place="bottom-end" className="supportWindow" events={['hover']}/>
		</div>
	)
}

export default Navbar


