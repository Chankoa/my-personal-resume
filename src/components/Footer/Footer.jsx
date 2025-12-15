import PropTypes from "prop-types";
import styles from "./Footer.module.scss";

export default function Footer({ footer }) {
  const mailHref = `mailto:${footer.email}`;
  const telHref = `tel:${footer.phone.replace(/\s+/g, "")}`;

return (
    <footer className={styles.footer} role="contentinfo">
        <div className={`${styles.footerContent} container`}>
            <div className={styles.footerLinks}>
                <a href={mailHref}>{footer.email}</a>
            </div>

            <span className={styles.separator}>·</span>
            <div className={styles.footerLinks}>
                <a href={telHref}>{footer.phone}</a>
            </div>

            <span className={styles.separator}>·</span>

            <div>
                {footer.address.map((line) => (
                    <div key={line}>{line}</div>
                ))}
            </div>
        </div>
    </footer>
);
}

Footer.propTypes = {
  footer: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
