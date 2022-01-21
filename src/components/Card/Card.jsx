import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss'


export default function Card({item}) {
  return <>
            <NavLink to={`${item.alpha3Code}`} className="country">
                        <img src={item.flag} alt={item.name} />
                        <div className="content">
                            <h2>{item.name}</h2>
                            <p><span>Population: </span>{item.population}</p>
                            <p><span>Region: </span>{item.region}</p>
                            <p><span>Capital: </span>{item.capital}</p>
                        </div>
            </NavLink>
         </>;
}
