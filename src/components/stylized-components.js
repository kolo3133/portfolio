import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

export const SLink = styled(Link)`
  margin-right: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  :hover {
    color: white;
  }
`;

export const ProjectsDiv = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
`;

export const SCard = styled(Card)`
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BreakLine = styled.span`
  display: block;
  width: 60%;
  height: 1px;
  background-color: white;
  margin: auto;
  opacity: 0.6;
  margin-top: 2rem;
`;

export const HrefLink = styled.a`
  color: black;
  :hover {
    color: white;
  }
`;
