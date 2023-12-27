import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'

export default function Header() {
    return(
        <Navbar expand='lg' className='bg-body-tertiary' sticky='top'>
            <Container className='container-fluid'>
                <LinkContainer to="./">
                    <Navbar.Brand>Archer Curry</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="./Portfolio">
                    <Link>Portfolio</Link>
                </LinkContainer>
                <LinkContainer to='/Resume'>
                    <Link>Resume</Link>
                </LinkContainer>
                <LinkContainer to='/Contact'>
                    <Link>Contact</Link>
                </LinkContainer>
            </Container>
        </Navbar>
    )
}