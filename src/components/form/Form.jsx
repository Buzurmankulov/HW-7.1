import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [firstInput, setFirstInput] = useState({
        name: '',
        age: '',
        num: '',
      })
      const [secondInput,setSecondInput] = useState('')
      const [thirthInput,setThirthInput] = useState('')
    
      const changeInputValues = (e) => {
        setFirstInput(e.target.value)
      }
      const changeInputValuesTwo = (e) => {
        setSecondInput(e.target.value)
      }
      const changeInputValuesThree = (e) => {
        setThirthInput(e.target.value)
      }
      const sendData = () => {
        const data = {
          name: firstInput.name,
          age: secondInput.age,
          num: thirthInput.num
        }
        console.log(data);
      }
      const changeSetInputs = (key) => {
        
        return (e) => {
          setFirstInput((prevState) => {
          return {
            ...prevState,
            [key]:e.target.value
    
          }
          });
        };
      };
  return (
    <div>
         <div className="first__input">
      <label>
        <input type="text" value={firstInput.name} onChange={changeSetInputs('name')} />
      </label>
      </div> 
      <div className="second__input">
        <label>
          <input type="text" value={secondInput.age} onChange={changeSetInputs('age')} />
        </label>
      </div>
      <div className="thirth__input">
        <label>
          <input type="text" value={thirthInput.num} onChange={changeSetInputs('num')} />
        </label>
      </div>
     <button onClick={sendData}>Push</button>
      
    </div>
  )
}

export default Form;
