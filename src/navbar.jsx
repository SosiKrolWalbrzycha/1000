import React, {useEffect} from 'react'
import './navbar.scss'
import logo from './dices.png'
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
                <img src={logo} alt="Dices Logo" />
            </div>
            <div className='title'>
                <h1>Mistrz Tysiąca</h1>
                <p>Pokaż co potrafisz Leszczu!</p>
            </div>



        </div>
    );
}
 
export default Navbar;