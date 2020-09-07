import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamePropType } from '../../utils/types';
import styles from './Container.module.scss';

export default function Container({
  as: Component,
  contentClassName,
  className,
  children,
  ...props
}) {
  return (
    <Component className={classNames(styles.container, className)} {...props}>
      <div className={classNames(contentClassName, styles.content)}>
        {children}
      </div>
    </Component>
  );
}

Container.defaultProps = {
  as: `div`,
};

Container.propTypes = {
  contentClassName: ClassNamePropType,
  children: PropTypes.node.isRequired,
  className: ClassNamePropType,
  as: PropTypes.node,
};
