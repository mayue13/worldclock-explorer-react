import React, { useState, useEffect } from "react";
import {StyledInput,StyledList,StyledListItem,StyledButton} from "../UI/StyledComponents";
import styled from "styled-components";
 
const StyledDropdown = styled.div`
  background: none;
  margin-bottom: 1em;
  height: ${(props) => (props.dropdownActive ? props.dropdownHeight : "1px")};
  transition: height 0.1s ease-in-out;
  width: 100%;
`;

 function PlaceInput({addClock}){

    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const [dropdownActive, setDropdownActive] = useState(false);
  
    const dropdownHeight = `${results.length * 50}px`;
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
    };

    useEffect(() => {
        async function fetchData() {
          const get = await fetch(
            `https://rough-night-99a5.alkmt.workers.dev/cities?fields%5B%5D=geonameid&fields%5B%5D=asciiname&fields%5B%5D=timezone&filterByFormula=SEARCH(%22${searchValue.toLowerCase()}%22%2C+LOWER(asciiname))&maxRecords=3&sort%5B0%5D%5Bfield%5D=population&sort%5B0%5D%5Bdirection%5D=desc`
          );
          const res = await get.json();
          console.log(res.records);
          setResults(res.records);
        }
        if (searchValue.length > 0) {
            fetchData();            
          } else {
            setResults([]);
          }
        }, [searchValue]);

        const addClockHandler = (value) => {
            setSearchValue("");
            addClock(value);
          };
        
          const clickHandler = (e) => {
            addClockHandler(
              results.filter(
                (city) => city.fields.geonameid === parseInt(e.target.value, 10)
              )[0]
            );
          };
  


     return (
       <div>
            <StyledInput onChange={handleChange} placeholder="Add city..." value={searchValue} type="text" />
            
            <StyledDropdown dropdownHeight={dropdownHeight} dropdownActive={dropdownActive} >
            <StyledList>
          {results &&
            results.map((city) => (
              <StyledListItem key={city.id}>
                <StyledButton
                  value={city.fields.geonameid}
                  onClick={clickHandler}
                >
                  {city.fields.asciiname}
                </StyledButton>
              </StyledListItem>
            ))}
        </StyledList>
            </StyledDropdown>

       </div>
     );
 };

 export default PlaceInput;