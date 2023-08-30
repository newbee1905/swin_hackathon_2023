/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ImageUploader from "./ImageUploader";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";


function Typography() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Now Ui Table Heading</h5>
                <p className="category">Created using Montserrat Font Family</p>
              </CardHeader>
              <CardBody>
                <div className="typography-line">
                  <ImageUploader></ImageUploader>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
