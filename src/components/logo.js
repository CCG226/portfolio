import logoImg from "../Images/portfolioLogo.png";
function logo({ height }) {
  const styles = {
    height: height,
  };
  return (
    <div>
      <img src={logoImg} style={styles} alt="logo" />
    </div>
  );
}
export default logo;
