import { Suspense } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { isLoggedIn } from "redux/selector";
import styled from "styled-components";
import { AppBar } from "./AppBar/AppBar";   
import css from './SharedLayout.module.css'

export const SharedLayout = () => {

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

    return (
        <div>
            <header className={css.header}>
                <nav className={css.nav}>
                    <div>
                    <StyledLink to="/">HOME</StyledLink>
                    {LoggedIn && <StyledLink to="/contacts">CONTACTS</StyledLink>}
                    </div>
                    <div>
                       <AppBar/>
                    </div>
                </nav>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};