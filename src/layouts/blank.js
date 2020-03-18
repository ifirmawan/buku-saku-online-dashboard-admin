import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const blank = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {/* {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
);

blank.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

blank.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default blank;
