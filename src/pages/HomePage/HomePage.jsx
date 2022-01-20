import React from 'react'
import {useQuery} from 'react-query'
//components
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
//styles
import './HomePage.scss'

const getCountries = async () =>
  await (await fetch('https://restcountries.com/v2/all')).json();

export default function HomePage() {

    const { data, isLoading, error} = useQuery('countries',getCountries);
 
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    
    console.log(data)
    
    return (
        <>
            <Header />
    
            <Search />
         
            
            
            <section>
                {data?.map((item,index) =>(
                    <div className="country" key={index}>
                        <img src={item.flag} alt={item.name} />
                        <div className="content">
                            <h2>{item.name}</h2>
                            <p><span>Population: </span>{item.population}</p>
                            <p><span>Region: </span>{item.region}</p>
                            <p><span>Capital: </span>{item.capital}</p>
                        </div>
                    </div>
                ))}
            </section>
            
        </>
    )
}
