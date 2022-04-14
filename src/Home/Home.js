import HeaderHome from "./HeaderHome";
import "./Home.css";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "./data";
import Modal from "./Modal";

function Home(props) {
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [startDateBirth, setStartDateBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
<<<<<<< HEAD
    // const [street, setStreet] = useState();
    // const [city, setCity] = useState();
    // const [stateUS, setStateUS] = useState();
    // const [zip, setZip] = useState();
    // const [department, setDepartment] = useState();

    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputStreet = useRef(null);
    const inputCity = useRef(null);
    const inputStateUS = useRef(null);
    const inputZip = useRef(null);
    const inputDepartment = useRef(null);
=======
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [stateUS, setStateUS] = useState();
    const [zip, setZip] = useState();
    const [department, setDepartment] = useState("Sales");
    const [isShowing, setIsShowing] = useState(false);
>>>>>>> fca8618b8d4ade1ee914a0514ccc2f21f5ec2f42

    const handleSumbit = (e) => {
        e.preventDefault();
        // console.log(firstName);
        // console.log(lastName);
        // console.log(startDateBirth);
        // console.log(startDate);
        // console.log(street);
        // console.log(city);
        // console.log(stateUS);
        // console.log(zip);
        // console.log(department);

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
<<<<<<< HEAD
        // const form = {
        //     inputFirstName,
        //     lastName,
        //     startDateBirth,
        //     startDate,
        //     street,
        //     city,
        //     stateUS,
        //     zip,
        //     department
        // };
        console.log(form);
        props.setEmployees(form);
=======
        // props.setEmployees(form);
        props.setEmployees((prevState) => {
            return [...prevState, form]
        });
        setIsShowing(true);
>>>>>>> fca8618b8d4ade1ee914a0514ccc2f21f5ec2f42
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
                <DatePicker selected={startDateBirth} onChange={(date) => setStartDateBirth(date.target.value)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" ref={inputStreet} />

                    <label htmlFor="city">City</label>
<<<<<<< HEAD
                    <input id="city" type="text" ref={inputCity} />

=======
                    <input id="city" type="text" value={city} onChange={(value) => setCity(value.target.value)} />
                    <input id="city" type="text" />
                    //TODO : Faire avec des refs et useRef
>>>>>>> fca8618b8d4ade1ee914a0514ccc2f21f5ec2f42
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" ref={inputStateUS} defaultValue={"default"}>
                        <option value={"default"} disabled>
                            Choose an option
                        </option>
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}> {state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" ref={inputZip} />
                </fieldset>
                <label htmlFor="department">Department</label>
<<<<<<< HEAD
                <select name="department" id="department" ref={inputDepartment} defaultValue={"default"}>
                    {/* // TODO : Bug car il faut mettre un default je crois sinon une erreur sur la console.log */}
                    <option value={"default"} disabled>
=======
                <select name="department" id="department" onChange={(value) => setDepartment(value.target.value)} defaultValue={"Sales"}>
                    {/* <option value={"default"} disabled>
>>>>>>> fca8618b8d4ade1ee914a0514ccc2f21f5ec2f42
                        Choose an option
                    </option> */}
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
                <button type="submit">Save</button>
            </form>
            <Modal isShowing={isShowing} setIsShowing={setIsShowing} />
        </div>
    );
}

export default Home;