import React from 'react'
import {useQuery} from 'react-query'
import Card from '../../components/Card/Card';
//styles
import './HomePage.scss'

const getCountries = async () =>
  await (await fetch('https://restcountries.com/v2/all')).json();

export default function HomePage() {

    const [searchTerm,setSearchTerm] = React.useState("")

    const { data, isLoading, error} = useQuery('countries',getCountries);
 
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    
   // console.log(data)
    
    return (
        <>
            
            <div id="search">
                <div id="searchbar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Search for a country...' onChange={(event) =>{setSearchTerm(event.target.value)}}/>
                </div>

                <select>
                    <option>Africa</option>
                    <option>America</option>
                </select>
            </div>

            <section>
                {data.filter((item) => {
                    if(searchTerm ==="") {
                        return item;
                    } else if (item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return item
                    }
                    return false
                }).map((item,index) =>{
                    return (
                        <Card item={item} key={index} /> 
                    );
                })}
                 
                
            </section>
            
        </>
    )
}
