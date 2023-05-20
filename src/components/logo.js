import logo from "../Images/logo.png";
function Logo({ height }) {
  const styles = {
    height: height,
  };
  return (
    <div>
      <img src={logo} style={styles} alt="logo" />
    </div>
  );
}
export default Logo;
