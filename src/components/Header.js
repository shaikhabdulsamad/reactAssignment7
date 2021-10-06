import './style.css'
import Logo from '../assets/images/logo2.jpeg'

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="" width="60px " />
            <h2>Expense Tracker</h2>
        </div>
    )
}

export default Header
