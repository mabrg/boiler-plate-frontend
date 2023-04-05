import { DelayedRender, MessageBar, MessageBarType } from '@fluentui/react';
import React from 'react';

import { INotFound } from './index.d';

const NotFound = ({
  text = 'Page introuvable',
  headTitle = 'Page introuvable',
}: INotFound): JSX.Element => (
  <div>
    <p>Page introuvable</p>
  </div>
);

export default NotFound;
