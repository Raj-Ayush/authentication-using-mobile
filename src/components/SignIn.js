import React, { useState } from 'react'

/**
* @author
* @function SignIn
**/

const SignIn = (props) => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")

    const editName = (ev)=>{
      setName(ev.target.value);
    }
    const editEmail = (ev)=>{
        setEmail(ev.target.value);
    }
    return(
      <div className="container">
          <div className="row">
              <div className="col">
                <form>
                    <br/><br/>
                    <div className="form-group">
                        <label>Name</label><br/>
                        <input
                        type = "text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter name"
                        onChange={editName}
                        value={name}
                        />
                        <br/><br/>
                        <label>Email</label>
                        <input
                        type="email"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter name"
                        onChange={editEmail}
                        value={email}
                        />

                    </div>  
                    <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                </form>
              </div>
          </div>    
      </div>
     )

 }

export default SignIn