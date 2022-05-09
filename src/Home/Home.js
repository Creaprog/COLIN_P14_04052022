import HeaderHome from "./HeaderHome";

import "./Home.css";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "./data";
// import Modal from "./Modal";
import Modal from "npm-modal-oc-creap";

function Home(props) {
    const [startDateBirth, setStartDateBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [isShowing, setIsShowing] = useState(false);
    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputStreet = useRef(null);
    const inputCity = useRef(null);
    const inputStateUS = useRef(null);
    const inputZip = useRef(null);
    const inputDepartment = useRef(null);

    const handleSumbit = (e) => {
        e.preventDefault();

        const form = {
            firstName: inputFirstName.current.value,
            lastName: inputLastName.current.value,
            startDateBirth: startDateBirth,
            startDate: startDate,
            street: inputStreet.current.value,
            city: inputCity.current.value,
            stateUS: inputStateUS.current.value,
            zip: inputZip.current.value,
            department: inputDepartment.current.value,
        };
        console.log(form);
        props.setEmployees((prevState) => {
            localStorage.setItem("employees", JSON.stringify([...prevState, form]));
            return [...prevState, form]
        });
        setIsShowing(true);
    }

    return (
        <div className="container">
            <HeaderHome />
            <form className="home-form" onSubmit={handleSumbit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" ref={inputFirstName} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" ref={inputLastName} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker dateFormat="dd/MM/yyyy" selected={startDateBirth} onChange={(date) => {
                    // console.log(typeof date);
                    // setStartDateBirth(date.toUTCString());
                    setStartDateBirth(date);
                }} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" ref={inputStreet} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" ref={inputCity} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" ref={inputStateUS} defaultValue={"AL"}>
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}> {state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" ref={inputZip} />
                </fieldset >
                <label htmlFor="department">Department</label>
                <select name="department" id="department" ref={inputDepartment} defaultValue={"Sales"}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
                <button type="submit">Save</button>
            </form>
            <Modal isShowing={isShowing} setIsShowing={setIsShowing} message="Employee Created!" />
        </div>
    );
}

export default Home;