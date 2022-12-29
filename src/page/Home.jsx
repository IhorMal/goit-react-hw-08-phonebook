import { NavLink } from "react-router-dom";
import styled from "styled-components";
import css from './Home.module.css'



export default function Home() {
  const StyledLink = styled(NavLink)`
  color: black;
   font-weight: 700;
` 

    return (
      <div className={css.home}>

      <p>You need to visit our sites for further work <br/> <StyledLink to={`/register`}>Register</StyledLink> or <StyledLink to={`/Login`}>Login</StyledLink></p>

      </div>
    )
};