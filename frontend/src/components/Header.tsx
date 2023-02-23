import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      boxShadow: 'rgba(100, 100, 111, 0.05) 0px 6px 6px 0px'
    }}>
      <div style={{
        width: '100%',
        paddingLeft: '4em',
        paddingRight: '4em',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        
        <div style={{
          fontSize: '1.3em',
          fontWeight: 700
        }}>Jayna in the world ꒰･‿･꒱</div>

        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}>
            <DarkModeOutlinedIcon style={{fontSize: '20px', marginTop: '-2px'}} />
            <h5>Dark Mode</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
