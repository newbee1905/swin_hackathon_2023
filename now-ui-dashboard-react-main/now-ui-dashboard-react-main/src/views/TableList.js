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

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";

function RegularTables() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Introduction</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                <h6>Nguyen Tuan Dat (team learder)</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                <div>
                <h6>Nguyen Ha Huy Hoang</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                <div>
                <h6>Le Minh Vu</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                <div>
                <h6>Ngo Quoc Viet</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                <div>
                <h6>Tran Duy Duong</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                <div>
                <h6>Tran Anh Duy</h6>
                <img src="" alt="Girl in a jacket" width="500" height="600"/>
                <p>Vivamus auctor elementum ante commodo mattis. Morbi dictum, turpis ac pellentesque viverra, quam neque euismod eros, quis bibendum purus sem et dui. Donec magna leo, tincidunt et accumsan sit amet, efficitur nec eros. Nam faucibus dui quis odio mattis, quis eleifend tellus sagittis. Nulla vitae nisi eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper velit et elit sagittis rhoncus id vitae justo. Duis molestie lacus eu dictum condimentum. Nunc id cursus mauris. Curabitur vel imperdiet leo. Aliquam erat volutpat. Fusce sollicitudin odio vel odio dignissim, a lacinia nulla lobortis. In bibendum nisl ac aliquet tristique.</p>
                
                </div>

                


              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RegularTables;
