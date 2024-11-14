import styles from "./CountryItem.module.css";
import Flag from "./Flag";
import { CountryPropTypes } from "../proptypes/customPropTypes";

CountryItem.propTypes = {
  country: CountryPropTypes.isRequired,
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
