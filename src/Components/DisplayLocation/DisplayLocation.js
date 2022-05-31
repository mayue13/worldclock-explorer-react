import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {Container,Close,TimeString,PlaceString,SC,TimezoneAbbreviation} from "../UI/StyledComponents";

function DisplayLocation({ city, removeClock }) {
  const startTime = new Date(Date.now()).toLocaleTimeString("en-US", {
    timeZone: city.fields.timezone,
  });
  const [time, setTime] = useState(startTime);
  const [view, setView] = useState("digital");

  const timezoneAbbreviation = new Date(Date.now())
    .toLocaleTimeString("en-US", {
      timeZone: city.fields.timezone,
      timeZoneName: "short",
    })
    .split(" ")[2];

  var n = useRef(null);
  var t = useRef(null);

  useEffect(() => {}, [city]);

  useEffect(() => {
    const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
    n.current = setTimeout(() => {
      t.current = setInterval(() => {
        setTime(
          new Date(Date.now()).toLocaleTimeString("en-US", {
            timeZone: city.fields.timezone,
          })
        );
      });
    }, timeOffset);
    return function cleanup() {
      n.current = null;
      clearInterval(t.current);
    };
  }, [city.fields.timezone]);

  const [timeDig, timeOfDay] = time.split(" ");
  const [hours, minutes, seconds] = timeDig.split(":");

  const closeHandler = (e) => {
    removeClock(e.currentTarget.name);
  };

  return (
    <Container>
    <div style={{ display: "inline" }}>
      <PlaceString>{city.fields.asciiname}</PlaceString>
      <TimezoneAbbreviation>{timezoneAbbreviation}</TimezoneAbbreviation>
    </div>
    <Close name={city.fields.geonameid} onClick={closeHandler}>
      <FontAwesomeIcon style={{ float: "right" }} icon={faTimes} />
    </Close>
    {view === "digital" && (
      <TimeString>
        {hours} <SC>:</SC> {minutes} <SC>:</SC> {seconds} {timeOfDay}
      </TimeString>
    )}
  </Container>
  );
}

export default DisplayLocation;
