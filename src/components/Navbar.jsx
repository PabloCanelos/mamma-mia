import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav className="navbar">
      <div className="navbar-brand">Pizzeria Mamma Mia</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><button>Home</button></li>
        {token ? (
          <>
            <li className="navbar-item"><button>Profile</button></li>
            <li className="navbar-item"><button>Logout</button></li>
          </>
        ) : (
          <>
            <li className="navbar-item"><button>Login</button></li>
            <li className="navbar-item"><button>Register</button></li>
          </>
        )}
        <li className="navbar-item"><button>Total: ${total.toLocaleString()}</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
