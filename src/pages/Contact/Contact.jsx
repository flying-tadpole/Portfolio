import { Form } from "react-bootstrap"

export default function Contact() {

    const handleForm = (e) => {
        e.preventDefault()

      }

    return(
        <>
            <Form >
                <h4>Interested in getting in touch?</h4>
                <p>Leave your contact information and I'll get back to you as soon as I can.</p>
                <Form.Group className="mb-3">
                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <input
                        type="text"
                        placeholder="Contact Email"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <input
                        type="text"
                        placeholder="Message"
                    />
                </Form.Group>
                    <input
                        type='submit'
                        value='Submit'
                    />
            </Form>
            <div>
                <p>Or, you can reach directly out to me!</p>
                <h4>Email: archer.curry@gmail.com</h4>
            </div>
        </>
    )
}