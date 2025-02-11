import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoHome } from "react-icons/io5";

const Navbar = () => {


    return (
        <div>

            <div className="nav-item flex flex-col gap-3">
                <Link to="/"><div>Home</div></Link>
                <Link to="Add_employee"><div>Add Employee</div></Link>
                <Link to="Employee_form"><div>Employee list</div></Link>
            </div>

           
        </div>
    )
}

export default Navbar
