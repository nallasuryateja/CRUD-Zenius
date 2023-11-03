import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useEffect } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const Update = () =>{
    let navigate = useNavigate()

    const [id, setID] = useState(null);
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName]  = useState("")
    const [checked,setCheckBox] = useState(false)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckBox(localStorage.getItem('Checkbox Value'))
}, []);

const updateData = () =>{
    axios.put(`https://6543673801b5e279de204c58.mockapi.io/fakeData/${id}`,{firstName,lastName,checked})
    alert("updated data successfully")
    navigate("/read")
    
}

    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name'value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange = {(e) => setCheckBox(!checked)}/>
            </Form.Field>
            <Button type='submit' onClick={updateData}>Update</Button>
        </Form>
    )
    


} 
export default Update;