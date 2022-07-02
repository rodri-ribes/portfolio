import style from "./contact.module.css"
import axios from 'axios';

import {useState} from "react"
import {BsCheckCircleFill} from "react-icons/bs"

function validate(input) {
    let error = {};
  
    if(!input.name){
        error.name = "Name is required";
    }else if(!/^[a-z ,.'-]+$/i.test(input.name)){
        error.name = "Numbers are not allowed in the name";
    }else if(input.name.length < 5){
        error.name = "Must be at least 5 characters";
    }

    if(!input.email){
      error.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
      error.email = "Email is invalid";
    }

    if(!input.message){
      error.message = "Message is required";
    }else if(input.message.length < 10){
        error.message = "The message must have at least 10 characters";
    }
    return error
}

function Send() {
    return(
        <>
            <div className={style.ContainerSend}>
                <h3>Successfully sent...</h3>
                <BsCheckCircleFill/>
            </div>
        </>
    )
}


function Contact() {
    
    let user = {
        name: "",
        email: "",
        message: ""
    }
    
    let [input, setInput] = useState(user);
    
    let [error, setError] = useState({});
    
    let [visible, setVisible] = useState(false);

    let handleOnChange = (e) =>{
        setInput(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
    
        setError(validate({...input, [e.target.name]: e.target.value}));
    }

    let handleSubmit = async(e) =>{
        
        setVisible(true);

        try {
            // await axios.post("http://localhost:3001/send-email",{
            await axios.post("https://conservative-mountie-61739.herokuapp.com/send-email",{
                input
            })

        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setVisible(false);
            setInput(user)
        }, 2000);
    }

    return (
        <div className={style.Container}>
            <h1 className={style.Title} id="contact">CONTACT</h1>
            <hr className={style.hrAbout}/>
            <p className={style.Text}>Do you have something to propose to me? Contact me!</p>

            <form className={style.form}>
                {visible? <Send/> : 
                    <div className={style.ContainInputs}>
                        <div className={style.InputsLabels}>
                            <label>Nombre: </label>
                            <input type="text" name="name" onChange={handleOnChange} required minLength="5"></input>
                            {error.name? <p className={style.InputsLabels__error}>{error.name}</p>: null}
                        </div>
                        <div className={style.InputsLabels}>
                            <label>Email: </label>
                            <input type="email" name="email" onChange={handleOnChange} required></input> 
                            {error.email? <p className={style.InputsLabels__error}>{error.email}</p>: null}
                        </div>
                        <div className={style.InputsLabels}>
                            <label>Mensaje: </label>
                            <textarea name="message" onChange={handleOnChange} required minLength="10"/>
                            {error.message? <p className={style.InputsLabels__error}>{error.message}</p>: null}
                        </div> 
                        <input type="button" onClick={()=> handleSubmit()} value="Enviar" disabled={!input.name || Object.keys(error).length>0}/>
                    </div> 
                }
                
            </form>
        </div> 
     );
}

export default Contact;