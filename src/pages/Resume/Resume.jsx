import { Card, Container, Image } from 'react-bootstrap'
import resumePdf from '../../Archer Curry Resume Summer 2023 BA2.pdf'

export default function Resume() {
    return(
        <Container style={{width: '100vw', height: 'auto'}}>
            <object data={resumePdf} type="application/pdf" >
            </object>
        </Container>
        // <Card>
        //     <Card.Img src={resumePdf} />
        //     <a href={resumePdf}>Download Resume</a>
        // </Card>
    )
}