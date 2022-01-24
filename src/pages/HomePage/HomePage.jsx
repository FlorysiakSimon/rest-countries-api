import React, {useState,useEffect} from 'react'
import { getAllCountries,getRegion } from '../../services/data';
import Card from '../../components/Card/Card';
import Dropdown from '../../components/Dropdown/Dropdown';
//styles
import './HomePage.scss'
import FilteredCard from '../../components/FilteredCard/FilteredCard';


export default function HomePage() {
    const [searchTerm,setSearchTerm] = useState("")
    const [data, setData] = useState([]);
    const [filtredData, setFiltredData] = useState([]);
    const [region,setRegion] = useState("")
 
    useEffect(() => {
        if(!region){return null}
        const getData = async () => {
          const request = await getRegion(region);
          if (!request) return null;
          setFiltredData(request);
        };
        getData();
    }, [region]);

    useEffect(() => {
		const getData = async () => {
			const request = await getAllCountries();
			if (!request) return alert('data error');
			setData(request);
		};
		getData();
	}, []);
	if (data.length === 0) return null;
      


    
    function FilterData(item) {       
        setRegion(item.value) 
        const getData = async () => {
			const request = await getRegion(region);
			if (!request) return null;
			setFiltredData(request);
		};
		getData();
        
    }



    return (
        <>
            
            <div id="search">
                <div id="searchbar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Search for a country...' onChange={(event) =>{setSearchTerm(event.target.value)}}/>
                </div>

                <Dropdown title="Filter by Region" filterData={FilterData} />
            </div>

            <section id="countries">

            {filtredData.length 
            ?(  //filtered by region
                filtredData.filter((item) => {
                    if(searchTerm ==="") {
                        return item;
                    } else if (item.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return item
                    }
                    return false
                }).map((item,index) =>{
                    return (
                        <FilteredCard item={item} key={index} /> 
                    );
                })

            ):  //all countries
                data.filter((item) => {
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
                })
            }
                
                
                         
 
                 
                
            </section>
            
        </>
    )
}
