import React, { useState, useEffect } from "react";
import styled from "styled-components";

import   LocationDisplay  from "../DisplayLocation/DisplayLocation";
import   PlaceInput from "../PlaceInput/PlaceInput";
import { ContainerSection,Title,Footer,FooterLink } from "../UI/StyledComponents";
import './GetCityTIme.css'

const Header = styled.header`
  opacity: ${(props) => (props.showHeader ? 1 : 0)};
  transition: opacity 1s ease-in;
`;

function lsTest() {
    var test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }



function GetCityTime(params) {
    
    const [clocks, setClocks] = useState([]);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        if (lsTest() === true) {
          const hasClocksInStorage =
            localStorage.getItem("clocks") &&
            JSON.parse(localStorage.getItem("clocks")).length > 0;
          const storedClocks = hasClocksInStorage
            ? JSON.parse(localStorage.getItem("clocks"))
            : null;
          if (hasClocksInStorage) {
            setClocks(storedClocks);
          }
        } else {
          console.log("localStorage not available");
        }
      }, []);

      useEffect(() => {
        if (lsTest() === true) {
          localStorage.setItem("clocks", JSON.stringify(clocks));
        } else {
          console.log("localStorage not available");
        }
      }, [clocks]);
    
      const addClock = (city) => {
        setClocks([city, ...clocks]);
      };
    
      const removeClock = (id) => {
        setClocks(
          clocks.filter((city) => city.fields.geonameid !== parseInt(id, 10))
        );
      };



    return(
        <div className="App">
            <ContainerSection>
        <Header showHeader={showHeader}>
          <Title>City Time</Title>
          <PlaceInput addClock={addClock} />
        </Header>
        {clocks &&
          clocks.map((city) => (
            <LocationDisplay
              key={city.id}
              removeClock={removeClock}
              city={city}
            />
          ))}
      </ContainerSection>
      <Footer>
        World Clock by{" "}
        <FooterLink href="https://github.com/mayued13" target="_blank">
          @mayued13
        </FooterLink>{" "}
      </Footer>
        </div>
    );
}

export default GetCityTime;