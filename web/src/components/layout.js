import React from "react";
import Header from "./header";
import styled from "styled-components";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}> */}
    <BlueWrapper>
      <footer class="container">
        <h2 style={{ color: "white" }}>Let's create something.</h2>

        <div class="copyright">Hughson Wong 2020. All Rights Reserved</div>
      </footer>
    </BlueWrapper>
    {/* </div>
      </div>
    </footer> */}
  </>
);

const BlueWrapper = styled.div`
  background-color: #334ccb;
  border-radius: 0 200px 0 0;
  padding: 3rem;
  color: white;
`;
export default Layout;
