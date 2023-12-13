export default function Contact() {

    const handleForm = (e) => {
        e.preventDefault()

      }

    return(
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        type="text"
                        placeholder="Contact Email"
                    />
                    <input
                        type="text"
                        placeholder="Message"
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
            <div>
                <h3>Email: archer.curry@gmail.com</h3>
            </div>
        </>
    )
}