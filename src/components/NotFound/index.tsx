import { DelayedRender, MessageBar, MessageBarType } from '@fluentui/react';

import { INotFound } from './index.d';

const NotFound = ({
  text = 'Page introuvable',
  headTitle = 'Page introuvable',
}: INotFound): JSX.Element => (
    <DelayedRender delay={500}>
      <MessageBar messageBarType={MessageBarType.error}>{text}</MessageBar>
    </DelayedRender>
);

export default NotFound;
