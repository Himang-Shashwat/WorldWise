import PropTypes from "prop-types";

const CountryPropTypes = PropTypes.shape({
  countryCode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
});

const ButtonPropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

const BaseCityProps = {
  id: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

const CityPropTypes = PropTypes.shape(BaseCityProps).isRequired;

const CityListPropTypes = PropTypes.shape({
  ...BaseCityProps,
  notes: PropTypes.string,
}).isRequired;

const CountryListPropTypes = PropTypes.shape({
  ...BaseCityProps,
  country: PropTypes.string,
});

const FlagPropTypes = { countryCode: PropTypes.string };

const ChangeMapCenterPropTypes = {
  position: PropTypes.arrayOf({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

const MessagePropTypes = {
  message: PropTypes.string.isRequired,
};

const ContextProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export {
  CountryPropTypes,
  ButtonPropTypes,
  CityPropTypes,
  CityListPropTypes,
  CountryListPropTypes,
  FlagPropTypes,
  ChangeMapCenterPropTypes,
  MessagePropTypes,
  ContextProviderPropTypes,
};
