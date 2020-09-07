import PropTypes from 'prop-types';

export const ClassNamePropType = PropTypes.oneOfType([
  PropTypes.arrayOf([PropTypes.string, PropTypes.object, PropTypes.bool]),
  PropTypes.object,
  PropTypes.string,
  PropTypes.bool,
]);
