import { Link } from "react-router-dom";

function HeaderHome() {
    return (<header>
        <h1>HRNet</h1>
        <nav>
            <ul>
                <li><Link to="/employee">View Current Employees</Link></li>
            </ul>
        </nav>
        <h1>Create Employee</h1>
    </header>)
}

export default HeaderHome;