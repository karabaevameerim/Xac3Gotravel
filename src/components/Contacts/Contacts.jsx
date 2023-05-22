import React from 'react'
import "./Contacts.css"

const Contacts = () => {
  return (
    <div>
        <div className="containe">
    <h1>Контакты</h1>
    <div className="contact-card">
    <div className="image">
        <img src="https://i.ibb.co/3d2Pb0v/7-FD07-C17-91-A1-4352-A2-EA-51-F225182-A65.jpg" alt="Солтонбеков Эмир"/>
      </div>
      <div className="info">
        <h2>Солтонбеков Эмир</h2>
        <p>Телефон: +996 559-43-88-86</p>
        <p>Email: emirsoltonbekov@email.com</p>
      </div>
    </div>
    <div class="contact-card">

    <div class="image">
        <img src="https://i.ibb.co/HDWSMN3/1.jpg" alt="Карабаева Мээрим"/>
      </div>
      <div class="info">
        <h2>Карабаева Мээрим</h2>
        <p>Телефон: +996 504-90-07-74</p>
        <p>Email: karabaevameerim@gmail.com</p>
      </div>
     
    </div>

    <div className="contact-card">
    <div className="image">
        <img src="https://i.ibb.co/8b8kRgn/CCE07-EEA-7346-434-A-9-E5-A-DD573-B934-AA4.jpg" alt="Назарбекова Бурул"/>
      </div>
      <div className="info">
        <h2>Назарбекова Бурул</h2>
        <p>Телефон: +996 505-20-03-09</p>
        <p>Email: nazarbekovaburul@email.com</p>
      </div>
    </div>
   

    {/* <!-- Добавьте дополнительные contact-card для других контактов --> */}

  </div>
    </div>
  )
}

export default Contacts