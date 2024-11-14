import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>CRUD MVC</h1>
      <div style={styles.linkContainer}>
        <Link to="/students" style={styles.link}>Students</Link>
        <Link to="/faculty" style={styles.link}>Faculty</Link>
        <Link to="/upload" style={styles.link}>Upload</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1e2a38',  // Darker background for a more professional look
    padding: '15px 30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',  // More pronounced shadow for a floating effect
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  },
  title: {
    color: '#f1c40f',  // Golden yellow for the title for a vibrant contrast
    fontSize: '28px',
    fontWeight: '800',
    letterSpacing: '1px',
    margin: '0',
  },
  linkContainer: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
  },
  link: {
    color: '#ecf0f1',  // Light text color for contrast
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    padding: '12px 25px',
    borderRadius: '30px',  // Rounded link buttons for a modern feel
    backgroundColor: '#2980b9',  // Soft blue background for links
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  // Adding hover effects for the links
  linkHover: {
    backgroundColor: '#3498db',  // Slightly lighter blue on hover
    transform: 'scale(1.05)',  // Slight scale effect on hover
  },
};

// Adding hover effect dynamically to links
const StyledLink = (props) => (
  <Link 
    to={props.to}
    style={{
      ...styles.link,
      ':hover': styles.linkHover,
    }}
  >
    {props.children}
  </Link>
);

export default Navbar;
