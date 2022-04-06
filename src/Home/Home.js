import HeaderHome from "./HeaderHome";
import "./Home.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "./data";

function Home() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [startDateBirth, setStartDateBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [stateUS, setStateUS] = useState();
    const [zip, setZip] = useState();
    const [department, setDepartment] = useState();

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(startDateBirth);
        console.log(startDate);
        console.log(street);
        console.log(city);
        console.log(stateUS);
        console.log(zip);
        console.log(department);

        const form = JSON.stringify({
            firstName,
            lastName,
            startDateBirth,
            startDate,
            street,
            city,
            stateUS,
            zip,
            department
        });
        let data = [];
        // setEmployees
        data.push(JSON.parse(localStorage.getItem("data")));
        data.push(form);
        localStorage.setItem("data", data);
        console.log(JSON.parse(localStorage.getItem("data")));
        // TODO : J'ai un bug, ça n'ajoute pas...
    }

    return (
        <div className="container">
            <HeaderHome />
            <form className="home-form" onSubmit={handleSumbit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={(value) => setFirstName(value.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={(value) => setLastName(value.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker selected={startDateBirth} onChange={(date) => setStartDateBirth(date.target.value)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={(value) => setStreet(value.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(value) => setCity(value.target.value)} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" onChange={(value) => setStateUS(value.target.value)}>
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}> {state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={(value) => setZip(value.target.value)} />
                </fieldset>
                <label htmlFor="department">Department</label>
                <select name="department" id="department" onChange={(value) => setDepartment(value.target.value)}>
                    {/* // TODO : Bug car il faut mettre un default je crois sinon une erreur sur la console.log */}
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default Home;