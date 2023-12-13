export default function Portfolio() {

    const projectList = [
        {
            title: "SVG Logo Maker",
            repo: 'https://github.com/flying-tadpole/SVGLogoMaker',
            image: 'https://raw.githubusercontent.com/flying-tadpole/SVGLogoMaker/main/assets/commandLineDisplay.png'
        },
        {
            title: "SQL Employee Tracker",
            repo: 'https://github.com/flying-tadpole/EmployeeTracker',
            image: 'https://i.postimg.cc/K8h0tfB3/employeetracker.png'
        },
        {
            title: "The Escape Room",
            repo: 'https://github.com/flying-tadpole/The-Escape-Room',
            image: 'https://i.postimg.cc/R0MGD0PM/escaperoom.png'
        },
        {
            title: "NoSQL Social Network API",
            repo: 'https://github.com/flying-tadpole/NoSQL---Social-Network-API',
            image: 'https://i.postimg.cc/y8hvjRyQ/NoSQL.png'
        },
        {
            title: "Javascript Quiz",
            repo: 'https://github.com/flying-tadpole/JavascriptQuiz',
            image: 'https://i.postimg.cc/gkZMwQXP/javascriptquiz.png'
        },
        {
            title: "Art Block Breaker",
            repo: 'https://github.com/flying-tadpole/ArtBlockBreaker',
            image: 'https://i.postimg.cc/DzB5kKD1/artblockbreaker.png'
        }
    ]

    const projects = projectList.map(item => {
        return (
            <div>
                <a href={item.repo}>{item.title}</a>
                <img src={item.image}></img>
            </div>
        )
    })

    return(
        [projects]
    )
}