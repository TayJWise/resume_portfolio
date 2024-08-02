import { useState, useEffect}  from "react";
import {Link} from "react-scroll";

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500)
            {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }

    }, []);

    return (
        <nav className={`navbar${navActive ? "active" : ""}`}>
            <a className={`navHamburger ${navActive ? "active" : ""}`}
            onClick={(toggleNav)}>
                <span className="navHamburgerLine"></span>
                <span className="navHamburgerLine"></span>
                <span className="navHamburgerLine"></span>
            </a>
            <div className={`navbarItems ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbarActiveContent" 
                        spy={true} 
                        smooth={true} 
                        offset={-70}
                        duration={500}
                        to="Hero"
                        className="navbarContent"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbarActiveContent" 
                        spy={true} 
                        smooth={true} 
                        offset={-70}
                        duration={500}
                        to="Experience"
                        className="navbarContent"
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbarActiveContent" 
                        spy={true} 
                        smooth={true} 
                        offset={-70}
                        duration={500}
                        to="Projects"
                        className="navbarContent"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                    <Link onClick={closeMenu} 
                        activeClass="navbarActiveContent" 
                        spy={true} 
                        smooth={true} 
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="navbarContent"
                        >
                            AboutMe
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} 
                activeClass="navbarActiveContent" 
                spy={true} 
                smooth={true} 
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary">
                    Contact Me
            </Link>
        </nav>
    );

}

export default Navbar;