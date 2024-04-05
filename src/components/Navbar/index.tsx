import "./index.scss";
interface Iprops {
  isRegister: boolean;
  setIsRegister: (val: boolean) => void;
}

const Navbarx = (props: Iprops) => {
  const { isRegister, setIsRegister } = props;

  return (
    <div className="navbar-list">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
      </div>
      <button
        className="button"
        onClick={() => {
          setIsRegister(!isRegister);
        }}
      >
        {isRegister ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};

const Navbar = (props: Iprops) => {
  const { isRegister, setIsRegister } = props;
  return (
    <header className="bg-swhite">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => {
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? "Sign Up" : "Log In"}{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
