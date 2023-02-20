import React from "react";
import classes from "./index.module.scss";
import {Col, Form, Row} from "react-bootstrap";
import Logo from "../../Components/Logo";


const AuthLayout = ({ children }) => {
  return (
    <div className={classes.login}>
      <div className={"container"}>
          <Row className={classes.loginholder}>
              <Col md={7}>
                  <Logo />
              </Col>
              <Col md={5}>
                  <div className={classes.fromHolder}>
                      {children}
                  </div>
              </Col>
          </Row>

      </div>
    </div>
  );
};

export default AuthLayout;
