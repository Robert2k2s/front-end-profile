import "../Nav/Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  const [showHide, setShowHide] = useState(false);
  const hanldShowHide = () => {
    setShowHide(!showHide);
  };
  return (
    <div className="Nav">
      <div className="Nav-logo">
        <a href=" #">
          <img
            src="data:image/webp;base64,UklGRoQCAABXRUJQVlA4THcCAAAvnkAHEPegoG0bydJwjD+P4dr9B8IwG0n9LtLCrD/AAZyCtm0Yq/wZd0dx20jKwjGn2/te46eErH/FB1DwwxFQYIgYAADQh2oFho2LghyRc3mgbdtWFduZjr1U1HM0IkRSIfn///QGlfge0f8J0P30D09/dLuZ9fIp71WamZdLea/SzLxcynuVZublUt6rNDMvl/JeZ+blUt7rTLxFO/SF/t7rTPz/TIDds2HoZcBU5LPXmfiSdvPe+827GsPgTgLPHCAH+BKfvc7EtzgugxVzwKGnTJQBY4HPXmfi+/DFeoiHEWj18ERqTc8/e52Jr4pmfQRM0rCF4N2h9X7VGKYRwG/9CLB6k7o1hG1pbyzet4dhC8G7k89eZ+LLJHUnHefRJAcEIB7AxQOYVs7HqwiD1HEeTfrsdSb+K8Z1OAMi5wMXE9fujpNxHfTZ6/zm68y6eFiAresjMFyErZsgdr11HmLXG8DYLkC8twBb10dg+Ovhv0/+4OGf+8Nc4tIrQpAkwJ+skuQgStIKUXJAL2kC2lsRgiQBXg9/HsxWJ6dywQS4wwrxRCVGiJJkgLsFuMMKscrc/FTJSUW2LXgn2dVyEYsspexqqTQ3qpKTikRdRlgPAbZyDjBJPdDdUYT1EGCrMDeqkpMqeWCUFmB6QHejBYKpA7BbHhilBZjKzY2q5KRaHTftTsfRXWgDiACLbnXctGJzoyo5qZrGq153FB7Y4bjpnsarXqXmRlVy0heoDwff6p6t96TlEEc9UR8OvlWpuVGVnPSlZqYvNDMVNTOVPJsbVclJ730yN6qSk17uV6MqOenlJt0tkZNeblKdnPRyk+rkpNcFAA=="
            alt="logo"
          />
        </a>
      </div>
      <div className="Nav-List">
        <div onClick={hanldShowHide} className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="List">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Project">Project</Link>
          <Link to="/Other">Other</Link>
        </ul>
        {showHide ? (
          <ul className="Lists">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Other">Other</Link>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nav;
