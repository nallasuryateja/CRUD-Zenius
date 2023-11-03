import {Table,Button} from "semantic-ui-react"
import { useState,useEffect } from "react"
import axios from "axios"

import {Link} from "react-router-dom"


const Read = () => {

    const [apiData,setApiData] = useState([]);

    useEffect(() =>{
        axios.get(`https://6543673801b5e279de204c58.mockapi.io/fakeData`)
        .then((response) =>{
            setApiData(response.data)
            
        })

    },[])

    
    const setData = (data) => {
        let { id, firstName, lastName, checked } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checked)
}

    const getData = () =>{
        axios.get(`https://6543673801b5e279de204c58.mockapi.io/fakeData`)
        .then((response) =>{
            setApiData(response.data)
            
        })
    }


    const deleteData = async (id) =>{
        alert("deleted successfully")
        await axios.delete(`https://6543673801b5e279de204c58.mockapi.io/fakeData/${id}`)
        .then(() =>{
            getData()
        })
        
    }

return (
        <div>
            <h1>Read</h1>
            <div>
                <Table SingleLine>
                    <Table.Header>
                        <Table.Row>                    
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Checked</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
    
                    </Table.Header>
                    <Table.Body>
                        {apiData.map((data)=>{
                            return(
                                <Table.Row>            
                                   <Table.Cell>{data.firstName}</Table.Cell>
                                   <Table.Cell>{data.lastName}</Table.Cell>
                                   <Table.Cell>{data.checked?"checked" : "unchecked"}</Table.Cell>
                                   <Table.Cell>
                                    <Link to="/update">
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        
                                            <Button onClick={() => deleteData(data.id)}>Delete</Button>
                                        
                                    </Table.Cell>
                                </Table.Row>

                                )
                            })}
                    </Table.Body>

                </Table>
             
            </div>
        </div>
    )
}

export default Read