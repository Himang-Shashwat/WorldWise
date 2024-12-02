import { FlagPropTypes } from "../proptypes/customPropTypes";

Flag.propTypes = FlagPropTypes;

function Flag({ countryCode }) {
  const lowerCasedCountryCode = countryCode.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/16x12/${lowerCasedCountryCode}.png`}
      alt={`Flag of ${countryCode}`}
    />
  );
}

export default Flag;
