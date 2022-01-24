import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FilteredCard({item}) {
  return <>
      <NavLink to={`${item.cca3}`} className="country">
                        <img src={item.flags.png} alt={item.flag} />
                        <div className="content">
                            <h2>{item.name.common}</h2>
                            <p><span>Population: </span>{item.population}</p>
                            <p><span>Region: </span>{item.region}</p>
                            <p><span>Capital: </span>{item.capital}</p>
                        </div>
            </NavLink>
  </>;
}
