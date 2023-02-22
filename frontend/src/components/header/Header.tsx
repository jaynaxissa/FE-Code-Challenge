import "./header.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-title">Where in the world?</div>
        <div className="header-options">
          <div className="item"
          onClick={handleToggleDarkMode}>
            <DarkModeOutlinedIcon className="icon" />
            <h5>Dark Mode</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
