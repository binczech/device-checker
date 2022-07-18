import classNames from 'classnames';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import './styles.scss';

interface Props {
    limitedWidth?: boolean;
}

const ContentBase: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, limitedWidth } = props;

  return (
    <div className={classNames('content', limitedWidth && 'limitedWidth')}>
      {children}
    </div>
  );
};

export const Content = memo(ContentBase);
