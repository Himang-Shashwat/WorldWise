import PropTypes from "prop-types";

Flag.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

function Flag({ countryCode }) {
  return (
    <img
      src={`https://flagcdn.com/16x12/${countryCode}.png`}
      alt={`Flag of ${countryCode}`}
    />
  );
}

export default Flag;
