import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav>
            <Link to='/Portfolio'>Portfolio</Link>
            <Link to='/'>About Me</Link>
            <Link to='/Resume'>Resume</Link>
            <Link to='/Contact'>Contact</Link>
        </nav>
    )
}