import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  
    const[values,setValues] = useState({
      name : "",
      email : "",
      gender : "",
      phone : "",
      password :""
  });

  const[success , setSuccess] = useState(false);

  const[allFilled , setAllFilled] = useState(false);

  const[nameCheck,setNameCheck] = useState(false);

  const[emailCheck,setEmailCheck] = useState(false);
  
  const[genderCheck,setGenderCheck] = useState("male");

  const[getUsername,setUserName] = useState("");

  const[pass,setPass] = useState(false);

  
  // if(userName)
  
  var userName="";
  function submitted(event)
  {
      event.preventDefault();

      if(values.email == "" || values.name=="" || values.phone == "" || values.password=="")
      {
          setAllFilled(true);
          return;
      }
      else
      {
          setSuccess(true);
          setEmailCheck(false);
          setNameCheck(false);
      }

      
      var RegEx = /^[a-z0-9 A-Z]+$/i;
      var Valid = RegEx.test(values.name);
      

      if(!Valid)
      {
          setNameCheck(true);
          setSuccess(false);
          setAllFilled(false);
      }

      var emailCheck = values.email.includes("@");

      if (!emailCheck) {
          setEmailCheck(true);
          setSuccess(false);
          setAllFilled(false);
      }

      setUserName(values.email.split("@")[0]);

      let checkPass = values.password.split("");
      if(checkPass.length < 6)
      {
          setPass(true);
          setSuccess(false);
          setAllFilled(false);
      }
      else
      {
          setPass(false)
      }

  }


 let checkSelect = false;


  const nameChangeHandler= event => setValues({...values,name: event.target.value});

  const emailChangeHandler= event => setValues({...values,email:event.target.value});

  const selectChangeHandler= event =>{
      setValues({...values,gender:event.target.value});
      setGenderCheck(event.target.value)
      checkSelect = true;
  }

  const phoneChangeHandler= event => setValues({...values,phone:event.target.value});

  const passChangeHandler= event => setValues({...values,password:event.target.value});


  return(
      <div className="div_wrapper">
          <form action="" onSubmit={submitted}>
              <div className="form_wrapper">

                  {success ? <div className="field">
                      <p>Hello {getUsername}</p>
                  </div> : allFilled? <p>All fields are mandatory</p>:""}

                  <div className="field">
                      <input type="text" id="name" value={values.name} onChange={nameChangeHandler} placeholder="Name" data-testid = 'name'/>
                      {nameCheck?<p>Name is not alphanumeric</p>:""}
                  </div>

                  <div className="field">
                      <input type="text" id="email" value={values.email} onChange={emailChangeHandler} placeholder="Email" data-testid = 'email'/>
                      {emailCheck?<p>Email must contain @</p>:""}
                  </div>

                  <div className="field">
                      <select name="" id="" value={genderCheck} onChange={selectChangeHandler} data-testid = 'gender'>
                          <option value="male" defaultValue="male">Male</option>
                          <option value="female" >Female</option>
                          <option value="other" >Other</option>
                      </select>
                  </div>

                  <div className="field">
                      <input type="number" id="phone" placeholder="Mobile" value={values.phone} onChange={phoneChangeHandler} data-testid = 'phoneNumber'/>
                  </div>

                  <div className="field">
                      <input type="password" id="pass" min="6" placeholder="Password" value={values.password} onChange={passChangeHandler} data-testid = 'password'/>
                      {pass?<p>Password must contain atleast 6 letters</p>:""}
                  </div>

                  <div className="field">
                      <button data-testid = 'submit' type="submit">Submit</button>
                  </div>
              </div>
          </form>

      </div>
  )
}


export default App;
