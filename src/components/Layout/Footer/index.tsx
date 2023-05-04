import { FontIcon, Stack } from '@fluentui/react';
import { memo } from 'react';

import config from '../../../../config';

const Footer = (): JSX.Element => {
  return (
    <div className="pa-footer">
      <div className="inner-footer">
        <div className="wrapper-inner">
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item className="footer-items" align="center">
              <ul className="footer-items-list">
                <li className="footer-item">
                  <a
                    href="https://www.apidae-tourisme.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontIcon iconName="Home" className="footer-icon" />
                    <span>Apidae Tourisme</span>
                  </a>
                </li>
              </ul>
            </Stack.Item>
            <Stack.Item className="footer-legal" align="center">
              {config.apidaeVersion && (
                <span>{`Apidae ${config.apidaeVersion as string}`}</span>
              )}
            </Stack.Item>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
