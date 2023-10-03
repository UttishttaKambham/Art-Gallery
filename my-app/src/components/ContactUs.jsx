import "./ContactUsStyles.css"
 function ContactUs(){
    return(
    <div className="from-container">
        <h1>You can reply to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Subject"/>
            <input placeholder="Email"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
    )
 }

 export default ContactUs;