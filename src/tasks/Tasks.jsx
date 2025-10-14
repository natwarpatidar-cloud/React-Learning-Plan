import { Link } from "react-router-dom"

export default function Tasks () {
    return (
        <ul>
            <li>
                <Link to='custom-error-boundary' >CEB</Link>
            </li>
            <li>
                <Link to='/performance-optimization'>Performance Optimization</Link>
            </li>
            <li>
                <Link to='/check-user-status'>Check User Status</Link>
            </li>
            <li>
                <Link to='/theme-toggle'>Toggle theme</Link>
            </li>
            <li>
                <Link to='/form-wizard'>Multi step form wizard</Link>
            </li>
            <li>
                <Link to='/compound-component'>Compound Component</Link>
            </li>
            <li>
                <Link to='/debounced-input'>Debounced Input</Link>
            </li>
            <li>
                <Link to='/infinite-scroll'>Infinite Scroll</Link>
            </li>
        </ul>
    )
}