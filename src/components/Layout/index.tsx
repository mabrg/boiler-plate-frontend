import {
    createTheme,
    Fabric,
    initializeIcons,
    loadTheme,
  } from '@fluentui/react';
  import React, { Suspense, useEffect } from 'react';
  
  import useRouteParams from '../utils/hooks/useRouteParams';
  import Footer from './Footer';
  import Header from './Header';
  import { ILayout } from './index.d';
  
  initializeIcons();
  const globalThemeProps = {
    defaultFontStyle: {
      fontFamily: 'poppins, Arial, sans-serif',
      fontWeight: '400',
    },
  } as const;
  
  const globalTheme = createTheme(globalThemeProps);
  
  const Layout = ({ children }: ILayout): JSX.Element => {
    const { parentsIds } = useRouteParams();
  
    useEffect(() => {
        loadTheme(globalTheme);
    }, [parentsIds]);
    return (
      <Fabric applyThemeToBody>
        <div className="wrapper">
          <Header />
          <div className="pa-main">
            <div className="wrapper-inner">
                {children}
            </div>
          </div>
          <Footer />
        </div>
      </Fabric>
    );
  };
  
  export default Layout;
  