import style from './contact_us.css'

function ContactUs (){
    return(
    <div className="main-contactus">  
        <form className="form">
            <h2>CONTACTENOS</h2>
            <p type="Name:"><input placeholder="Escriba su nombre aca.."></input></p>
            <p type="Email:"><input placeholder="Email"></input></p>
            <p type="Message:"><input placeholder="Numero telefonico"></input><button>Send Message</button>
</p>

            <div>
            </div>
        </form>
    </div>      
    )
}

export default ContactUs