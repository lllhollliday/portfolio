import "./emailForm.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const EmailForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_gaflzw6",
        "template_w9m4edr",
        form.current,
        "RmTRg_HnPNbcOW7wv"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

      e.target.reset()
  }

  return (
    <section>
      <div className="container">
        <h2>contact</h2>
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" placeholder="name" name="user_name" required />

          <input type="email" placeholder="email" name="user_email" required />

          <textarea name="message" id="textArea" /* cols="30" */ /* rows="10" */></textarea>

          <button>send</button>
        </form>
      </div>
    </section>
  )
}
export default EmailForm
