import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { Link as NLink } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamePropType } from '../../utils/types';
import Text from '../Text';
import styles from './Link.module.scss';

const createMask = (link) => {
  const [protocol] = link.split(':');
  return `${protocol}:unscrapable`;
};

export default function Link({ className, to: _to, mask, ...props }) {
  const [to, setTo] = useState(mask ? createMask(_to) : _to);
  const watch = to !== _to ? () => setTo(_to) : undefined;
  const external = to.match(/^(http|mailto|https):/g);
  const linkProps = external
    ? {
        rel: `noreferrer noopener`,
        target: `_blank`,
        href: to,
      }
    : {
        to,
      };

  return (
    <Text
      className={classNames(styles.link, className)}
      as={external ? OutboundLink : NLink}
      onMouseOver={watch}
      onFocus={watch}
      color='primary'
      {...linkProps}
      {...props}
    />
  );
}

Link.defaultProps = {
  to: ``,
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: ClassNamePropType,
  mask: PropTypes.bool,
};
