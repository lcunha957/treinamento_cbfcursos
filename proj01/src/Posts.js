import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
export default function Posts() {
    
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


const searchItems = (searchValue) => { 
setSearchInput(searchValue)
if (searchInput !== ''){
    const filteredData = APIData.filter((item) =>{return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
})
setFilteredResults(filteredData)
}
else{
    setFilteredResults(APIData)
}
  
}

const filteredData = APIData.filter((item) => {
    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange ={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>

         </div>
    )
}