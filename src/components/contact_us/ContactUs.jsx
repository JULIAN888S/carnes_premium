/*import style from './contact_us.css'

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
*/

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Enviar los datos del formulario al correo electrónico julian888s@gmail.com aquí.
    // Por ejemplo, puedes enviar una solicitud HTTP a un API que maneje el envío de correo electrónico.

    alert(
      `Nombre: ${formData.name}
Correo electrónico: ${formData.email}
Número telefónico: ${formData.phone}`
    );

    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Número telefónico:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactUs;