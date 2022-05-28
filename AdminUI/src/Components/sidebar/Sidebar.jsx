import { LineStyle, Timeline, TrendingUp, Person, Feedback,AlternateEmail, Movie } from '@material-ui/icons'
import { Storefront, BarChart,WorkOutline, Message, LibraryBooks, Money } from '@material-ui/icons'

import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
export default function sidebar() {
  return (
    <div className="sideBar">
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <h3 className="sideBarTitle"> Dashboard </h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <LineStyle className="sideBarIcon"/>
                        Home
                    </li>
                    <li className="sideBarListItem">
                        <Timeline className="sideBarIcon"/>
                        Analytics
                    </li>
                    <li className="sideBarListItem">
                        <TrendingUp className="sideBarIcon"/>
                        Sales
                    </li>                    
                </ul>
            </div>
            <div className="sideBarMenu">
                <h3 className="sideBarTitle"> Quick Menu </h3>
                <ul className="sideBarList">
                    <NavLink className="nav-item" to="/main/users">
                        <li className="sideBarListItem">
                            <Person className="sideBarIcon"/>
                            Users
                        </li>
                    </NavLink>
                    <NavLink to="/main/movies">
                        <li className="sideBarListItem">
                            <Movie className="sideBarIcon"/>
                            Movies
                        </li>
                    </NavLink>
                    {/* <li className="sideBarListItem">
                        <Money className="sideBarIcon"/>
                        Transactions
                    </li> 
                    <li className="sideBarListItem">
                        <BarChart className="sideBarIcon"/>
                        Reports
                    </li>                     */}
                </ul>
            </div>
            <div className="sideBarMenu">
                <h3 className="sideBarTitle"> Notifications </h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <AlternateEmail className="sideBarIcon"/>
                        Mail
                    </li>
                    <li className="sideBarListItem">
                        <Feedback className="sideBarIcon"/>
                        Feedback
                    </li>
                    <li className="sideBarListItem">
                        <Message className="sideBarIcon"/>
                        Messages
                    </li>                    
                </ul>
            </div>
        </div>
    </div>
  )
}
