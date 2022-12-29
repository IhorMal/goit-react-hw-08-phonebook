import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "redux/auth/operations";
import { isLoggedIn, name } from "redux/selector";
import styled from "styled-components";
import css from './AppBar.module.css'
import { Button } from '@chakra-ui/react'



export const AppBar = () => {
    const dispatch = useDispatch();

    const StyledLink = styled(NavLink)`
    color: black;
     padding-left: 20px;
     text-decoration: none;
     font-weight: 700;
    &.active {
      color: rgb(0,191,255);
    }
  ` 
  
    const LoggedIn = useSelector(isLoggedIn)
    const names = useSelector(name)

    return (
      <div className={css.conteiner}>
        {LoggedIn 
        ? 
        <div className={css.conteiner}><p>{names}</p> <Button colorScheme='teal' size='xs' className={css.conteiner}  onClick={ () => dispatch(logOut())}>LOGAUT</Button></div> 
        :
        <div>
            <StyledLink to="/register">REGISTER</StyledLink>
            <StyledLink to="/login">LOGIN</StyledLink>
        </div>}
      </div>       
    );
  };
