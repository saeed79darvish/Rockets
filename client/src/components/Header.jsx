import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div>

                <Link to="/" className="btn ">
                    <h5>Home</h5>

                </Link>
                <Link to="/about" className="btn ">
                    <h5>About</h5>

                </Link>
            </div>

        );
    }
}

export default Header;