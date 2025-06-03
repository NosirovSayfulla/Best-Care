import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagramSquare,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoLocationSharp, IoLogoYoutube } from "react-icons/io5";
import icode from "../assets/image.png";
import "../styles/footer.css"; // Import custom CSS

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="footer-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Logo & Description */}
          <div className="footer-section">
            <img src="src/assets/nav/Logo.png" alt="Logo" className="footer-logo" />
            <p className="footer-description">{t("company_intro")}</p>
          </div>

          {/* Phone Number */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3>{t("phone_number")}</h3>
            <p>+99890288</p>
            <p>+9989028810</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h3>{t("navigation")}</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/">{t("home")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("about")}</NavLink>
              </li>
              <li>
                <NavLink to="/product">{t("products")}</NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>{t("contact")}</h3>
            <div className="footer-icon-text">
              <IoLocationSharp />
              <span>{t("address")}</span>
            </div>
            <div className="footer-icon-text">
              <FaEnvelope />
              <span>bcareuz@gmail.com</span>
            </div>

            <motion.div
              className="footer-social"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <FaInstagramSquare />
              <FaTelegram />
              <IoLogoYoutube />
              <FaWhatsappSquare />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        ></motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p>{t("software")}</p>
          <img src={icode} alt="icode logo" className="footer-img" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
