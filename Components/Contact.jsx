import React from 'react'
import baseUrl from '../data/baseUrl';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then(() => {
    window.location.href = "/";
  });
};

const Contact = () =>{ 
  const INITIAL_STATE = {
    name: "",
    lastname: "",
    number: "",
    email: "",
    city: "",
    message: "",
  };

  const [data, setData] = React.useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      const url = `${baseUrl}/api/form`;
      const response = await axios.post(url, data);
      setData(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <> 
      <div id='contact' className='contact-container'>
        <div className='contact-title disappear'>Contact</div>
        <form className='form-contact disappear' >
          <div className='form-row'>
            <div className='textfield-container'>
              <label className='textfield-title'>First Name*</label>
              <input
                type="text"
                name="name"
                className="textfield"
                onChange={handleChange}
              />
            </div>
            <div className='textfield-container'>
              <label className='textfield-title'>Last Name*</label>
              <input
                type="text"
                name="lastname"
                className="textfield"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='textfield-container'>
              <label className='textfield-title'>Phone Number*</label>
              <input
                type="text"
                name="number"
                className="textfield"
                onChange={handleChange}
              />
            </div>
            <div className='textfield-container'>
              <label className='textfield-title'>Email Address</label>
              <input
                type="text"
                name="email"
                className="textfield"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='textfield-container' style={{ width: "928px" }}>
              <label className='textfield-title'>City*</label>
              <input
                type="text"
                name="city"
                className="textfield t-large"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='textfield-container' style={{ width: "928px" }}>
              <label className='textfield-title'>Message*</label>
              <input
                type="text"
                name="message"
                className="textfield t-large"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-row'>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact