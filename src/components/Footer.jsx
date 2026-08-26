import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLock, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const Footer = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAdmin, signIn, signOut } = useAdmin();
  const footerLinks = [
    { path: '/blog', name: 'Insights & Blog' },
    { path: '/disclaimer', name: 'Disclaimer' },
    { path: '/grievance', name: 'Grievance' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
    { path: '/terms-of-service', name: 'Terms of Service' },
    { path: '/code-of-business', name: 'Code of Business Conduct' },
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    if (signIn(username, password)) {
      setIsLoginOpen(false);
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('The username or password is incorrect.');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Melah Information Technologies</h3>
            <p>Innovative solutions for your digital transformation needs.</p>
            {/* <div className="social-links">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
            </div> */}
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><FaPhone /> +237670344547</li>
              <li><FaEnvelope /> info@melah.cm</li>
              <li><FaMapMarkerAlt /> Sonac Street Bamenda</li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Melah Information Technologies Co. Ltd. All rights reserved.</p>
          {isAdmin ? <button className="admin-account-link" onClick={signOut}><FaSignOutAlt /> Sign out admin</button> : <button className="admin-account-link" onClick={() => setIsLoginOpen(true)}><FaLock /> Admin Account</button>}
        </div>
      </div>
      <AnimatePresence>
        {isLoginOpen && <motion.div className="blog-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setIsLoginOpen(false)}>
          <motion.form className="admin-login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onMouseDown={(event) => event.stopPropagation()} onSubmit={handleLogin}>
            <button className="modal-close" type="button" onClick={() => setIsLoginOpen(false)} aria-label="Close"><FaTimes /></button>
            <span className="eyebrow">Protected access</span><h2>Admin Account</h2><p>Sign in to create and publish blog posts.</p>
            <label>Username<input required autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} /></label>
            <label>Password<input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
            {error && <p className="admin-login-error">{error}</p>}
            <button className="publish-button" type="submit"><FaLock /> Sign in</button>
          </motion.form>
        </motion.div>}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
