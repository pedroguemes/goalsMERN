// import {useState, useEffect} from 'react' 
import {useState} from 'react' 
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormaData] = useState({
    email:'',
    password:'',
  })

  const {email, password} = formData

  const onChange = (e) =>{
    setFormaData((prevState)=> ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
  }

 return  <>
            <section className="heading">
              <h1>
                <FaSignInAlt/> Login
              </h1>
              <p>Login and start setting goals.</p>
            </section>
            <section className="form">
              <form onSubmit={onSubmit}>
                 <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" value={email} placeholder="      e m a i l" onChange={onChange}/>
                 </div>
                 <div className="form-group">
                    <input type="password" className="form-control" id="password" name="password" value={password} placeholder="      p a s s w o r d  " onChange={onChange}/>
                  </div>
                   <div className="form-group">
                    <button type="submit" className='btn  btn-block'>Submit</button>
                  </div>
              </form>
            </section>
         </>

}

export default Login