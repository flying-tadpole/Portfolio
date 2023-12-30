import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

export default function Portfolio() {

    const projectList = [
        {
            title: "SVG Logo Maker",
            repo: 'https://github.com/flying-tadpole/SVGLogoMaker',
            image: 'https://raw.githubusercontent.com/flying-tadpole/SVGLogoMaker/main/assets/commandLineDisplay.png',
            description: 'Command line application for generating a simple SVG logo'
        },
        {
            title: "SQL Employee Tracker",
            repo: 'https://github.com/flying-tadpole/EmployeeTracker',
            image: 'https://i.postimg.cc/K8h0tfB3/employeetracker.png',
            description: 'Simple employee information tracker. CRUD capabilities'
        },
        {
            title: "The Escape Room",
            repo: 'https://github.com/flying-tadpole/The-Escape-Room',
            image: 'https://i.postimg.cc/R0MGD0PM/escaperoom.png',
            description: 'Group project. Text based adventure game.'
        },
        {
            title: "NoSQL Social Network API",
            repo: 'https://github.com/flying-tadpole/NoSQL---Social-Network-API',
            image: 'https://i.postimg.cc/y8hvjRyQ/NoSQL.png',
            description: 'NoSQL based social media application. Backend only.'
        },
        {
            title: "Javascript Quiz",
            repo: 'https://github.com/flying-tadpole/JavascriptQuiz',
            image: 'https://i.postimg.cc/gkZMwQXP/javascriptquiz.png',
            description: 'Interactive quiz.'
        },
        {
            title: "Art Block Breaker",
            repo: 'https://github.com/flying-tadpole/ArtBlockBreaker',
            image: 'https://i.postimg.cc/DzB5kKD1/artblockbreaker.png',
            description: 'Group project. Uses Art Institute API. Generates word cloud based on favorited images.'
        }
    ]

    const projects = projectList.map(item => {
        return (
            <Container>
                <Card key={item.title} style={{ width: '100%' }}>
                    <Card.Img className='imgCard' varient="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            description will go here.
                        </Card.Text>
                        <Button varient="primary" href={item.repo}>GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    })

    return(
        [projects]
    )
}