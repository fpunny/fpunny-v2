import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamePropType } from '../../utils/types';
import styles from './Text.module.scss';

export default function Text({
  as: Component,
  transform,
  className,
  align,
  color,
  bold,
  type,
  ...props
}) {
  if (process.env.NODE_ENV === `development`) {
    if (!styles[`text--type-${type}`]) {
      throw new Error(`[Text]: Unknown type - ${type}`);
    }

    if (color && !styles[`text--color-${color}`]) {
      throw new Error(`[Text]: Unknown color - ${color}`);
    }

    if (transform && !styles[`text--transform-${transform}`]) {
      throw new Error(`[Text]: Unknown transform - ${transform}`);
    }
  }

  return (
    <Component
      className={classNames(
        transform && styles[`text--transform-${transform}`],
        color && styles[`text--color-${color}`],
        align && styles[`text--align-${align}`],
        bold && styles[`text--bold`],
        styles[`text--type-${type}`],
        styles.text,
        className,
      )}
      {...props}
    />
  );
}

Text.defaultProps = {
  type: `body`,
  as: `span`,
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  className: ClassNamePropType,
  transform: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};
