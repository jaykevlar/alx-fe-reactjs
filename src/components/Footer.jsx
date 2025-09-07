const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "15px", marginTop: "20px" }}>
      <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
