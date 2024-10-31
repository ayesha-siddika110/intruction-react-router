import { Link } from "react-router-dom";

const Header = () => {
    const stylesss = {
        // backgroundColor: 'green',
        // textDecoration: 'none',
        color: 'equa',
        height: '50px'
    }
    const liststyle = {
        marginRight: '10px'
    }
    return (
        <div>
            <nav style={stylesss}>
                {/* link bebohar korle  */}
                <Link style={liststyle} to="/">Home</Link>
                <Link style={liststyle} to="/about">About</Link>
                <Link style={liststyle} to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                
            </nav>

        </div>
    );
};

export default Header;