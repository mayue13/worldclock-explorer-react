import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  box-sizing: border-box;
  background-color: rgba(125, 125, 125, 0.1);
  border: none;
  border-bottom: 2px solid #282828;
  transition: border-bottom-color 0.2s ease-in;
  padding: 1rem;
  width: 100%;
  font-size: 2rem;
  color: white;
  font-weight: 400;

  &:focus {
    /* background: rgba(255, 255, 255, 0.2); */
    border-bottom-color: #4179a6;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    transition: opacity 0.2s ease-in;
    color: #303030;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  backdrop-filter: blur(10px) opacity(100) brightness(0.2);
  width: 100%;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  /* background-color: #282828; */
  font-size: 1.5rem;
  padding: 1rem;
  color: lightgray;
  border-bottom: 1px solid #282828;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Container = styled.div`
  /* background-color: #161616; */
  /* border-radius: 1rem; */
  border: 1px solid black;
  width: 100%;
  padding: 2em;
  margin: 1em 0;
  /* box-shadow: 0.1em 0.1em; */
  backdrop-filter: blur(10px) opacity(100) brightness(0.2);
`;

export const TimeString = styled.p`
  color: white;
  font-size: 4rem;
  font-weight: 100;
  margin: 1rem 0;
  /* letter-spacing: 0.5rem; */
`;

export const PlaceString = styled.p`
display: inline-block;
font-size: 2em;
color: white;
margin: 0;
`;

export const TimezoneAbbreviation = styled.span`
display: inline-block;
font-size: 1em;
margin: 0 1em;
color: gray;
font-weight: bold;
`;

export const SC = styled.span`
  font-size: 2rem;
`;

export const Close = styled.button`
  float: right;
  color: #c44747;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${Container}:hover & {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  color: #e3e3e3;
  font-weight: lighter;
  font-size: 2em;
  text-align: center;
`;

export const Footer = styled.footer`
  color: lightgray;
  font-size: 0.8em;
  /* background: black; */
  margin-top: 1em;
  text-align: center;
  padding: 1em;
`;

export const ContainerSection = styled.section`
  margin: 0 auto;
  max-width: 800px;
  padding: 2em;
`;

export const FooterLink = styled.a`
  color: lightgray;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;