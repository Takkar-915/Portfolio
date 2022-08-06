import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">About me</Link>
                </li>
                <li>
                    <Link to="/works">Works</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header