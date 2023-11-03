import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios'

const Create = () =>{

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName]  = useState("")
    const [checked,setCheckBox] = useState(false)

    const postData = () =>{
        
        axios.post(`https://6543673801b5e279de204c58.mockapi.io/fakeData`,{firstName,lastName,checked})
        console.log(firstName)
        console.log(lastName)
        console.log(checked)
    }

    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange = {(e) => setCheckBox(!checked)}/>
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
    


} 
export default Create;