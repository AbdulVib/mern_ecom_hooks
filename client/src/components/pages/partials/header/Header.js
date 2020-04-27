import React, { useContext, useEffect } from 'react'

import AppContext from '../../../store/context/context'

import { Link, NavLink } from 'react-router-dom'

import styles from './Header.css'

export default function Header() {

    const user = true
    return (
        <div className={ styles.Header }>
            <div className={ `${styles.Logo} ` }>
                <NavLink activeClassName={ styles.ActiveLinks } to="/" exact>LOGO</NavLink>
            </div>
            <div className={ styles.NavLinks }>
                <NavLink activeClassName={ styles.ActiveLinks } to="/cart">CART</NavLink>
                { user && <NavLink activeClassName={ styles.ActiveLinks } to="/create">CREATE</NavLink> }
                {
                    user ? (
                        <>
                            <NavLink activeClassName={ styles.ActiveLinks } to="/account">ACCOUNT</NavLink>
                            <NavLink activeClassName={ styles.ActiveLinks } to="/logout">LOG-OUT</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink activeClassName={ styles.ActiveLinks } to="/login">LOG-IN</NavLink>
                            <NavLink activeClassName={ styles.ActiveLinks } to="/signup">SIGN-UP</NavLink>
                        </>
                    )
                }
            </div>
        </div>
    )
}
