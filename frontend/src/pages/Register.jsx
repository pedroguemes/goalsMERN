// import {useState, useEffect} from 'react' 
import {useState} from 'react' 
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormaData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''

  })

  const {name, email, password, password2} = formData

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
                <FaUser/> Register
              </h1>
              <p>Please create an account</p>
            </section>
            <section className="form">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" value={name} placeholder="      n  a  m  e" onChange={onChange}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" value={email} placeholder="      e m a i l" onChange={onChange}/>
                 </div>
                 <div className="form-group">
                    <input type="password" className="form-control" id="password" name="password" value={password} placeholder="      p a s s w o r d  " onChange={onChange}/>
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="    c o n f i r m     p a s s w o r d  " onChange={onChange}/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className='btn  btn-block'>Submit</button>
                  </div>
              </form>
            </section>
         </>

}

export default Register