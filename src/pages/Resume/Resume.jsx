import { Card } from 'react-bootstrap';

import resumePdf from '../../Resume.pdf'

import pic1 from '../../resumepic1.jpg';
import pic2 from '../../resumepic2.jpg';
import pic3 from '../../resumepic3.jpg';

export default function Resume() {

  return (
    <>
        <a href={resumePdf}>Download Resume</a>
        <Card style={{ width:"80%" }}>
            <Card.Img src={pic1} />
            <Card.Img src={pic2} />
            <Card.Img src={pic3} />
        </Card>
    </>
  );
}