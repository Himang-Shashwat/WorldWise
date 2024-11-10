import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";
import Flag from "./Flag";

CountryItem.propTypes = {
  country: PropTypes.shape({
    countryCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Flag countryCode={country.countryCode} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
