import React, {useState} from 'react'
import './style.css'

export const Form = () => {
    const [data, setData] = useState([{
        usrname: '',
        dept: '',
        rate: '',
    }])

    const [store, setStore] = useState([]);
    const [display, setDisplay] = useState(true);
    const [head, setHead] = useState("EMPLOYEE FEEDBACK FORM")


    const nameEvent = (e) => {
        // const name = e.target.name
        // const value = e.target.value 
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data);
    }

    const Submited = (e) => {
        e.preventDefault()
        const newData = { ...data, id: new Date().getTime().toString() }
        // console.log(newData);
        setStore([...store, newData])
        console.log(store);
        setHead("EMPLOYEE FEEDBACK LIST")
        setDisplay(false)
        setData("")
    }

    const Goback = () => {
        setDisplay(true)
        setHead("EMPLOYEE FEEDBACK FORM")
    }
  return  (
  <>
  <div className="top__containt"><h1>{head}</h1><hr /></div>
  {display ? <form onSubmit={Submited}>
          <div className="all__inputs">

              <label>Name: </label>
              <input type="text" onChange={nameEvent} value={data.usrname} name='name' required/> <br /><br />

              <label className="dept">Department: </label>

              <input type="text" onChange={nameEvent} value={data.dept} name='dept' required/> <br /><br />

              <label>Rating: </label>

              <input type="number" onChange={nameEvent} value={data.rate} name='rate' required min={0} max={20} /><br />
          </div>
          <div className="button"><input className='sub' type="Submit" /></div>
      </form> : <div> 
      <div className="result">
          {
              store.map((e) => {
                  return (
                      <>
                      <div className="section"> <p>Name: {e.name}</p> <p>Department: {e.dept}</p> <p>Rating: {e.rate}</p>
                      </div>
                      </>
                  )
              })
          }
      </div>
  <span>
      <button onClick={Goback} className="back__button">Go Back</button>
  </span>
      </div>
  }
</>
)
}


export default Form