import { FlagPropTypes } from "../proptypes/customPropTypes";

Flag.propTypes = FlagPropTypes;

function Flag({ countryCode }) {
  return (
    <img
      src={`https://flagcdn.com/16x12/${countryCode}.png`}
      alt={`Flag of ${countryCode}`}
    />
  );
}

export default Flag;
