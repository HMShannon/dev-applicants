import React from 'react';
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

const MainInfo = (props) => {
  return (
    <section className="main-info">
      <GridWrap>
        <GridRow id="main-content" direction="column">
          <GridRow width='100%' justify="between" align="center">

            <GridRow id="logo" width="400px" justify="around" align="center">
              <img alt="" id="logo-black" src={require('../images/logo-black.png')} />
              <h1 id="logo-name">Cardo</h1>
            </GridRow>

            <GridRow id="menu" display={['none', 'flex', 'none', 'flex']} justify="around" align="center" width="240px">
              <p>Deposit</p>
              <p>Dashboard</p>
              <p>Company</p>
              <p>Pricing</p>
            </GridRow>

            <GridRow id="menu-icon" display={['flex', 'none', 'flex', 'none']} width="20px">
              <img alt="" id="menu-icon" src={require('../images/menu-icon.png')} />
            </GridRow>

          </GridRow>

          <GridColumn width="100%" textAlign="start" mt={['xxl', 'l']}>
            <img alt="" id="asterisks-black" src={require('../images/asterisks-black.png')} />
            <p id="tagline">All the <strong>experience</strong> in the new credit card</p>
            <img alt="" className="arrow-black" src={require('../images/arrow.png')} />
            <p id="information">Simple transfers, payments for utilities, functional statement, card settings, for which you used to have to go to the branch online banking</p>
            <GridRow id="order" justify="start" align="center">
              <button id="order-button">Order a card</button>
              <p><strong>How it works ></strong></p>
            </GridRow>
          </GridColumn>

          <GridRow id="stats" justify="between">
            <GridColumn width="25%" id="active-users" textAlign="left">
              <p>Active Users</p>
              <h1>5000+</h1>
            </GridColumn>
            <GridColumn width="25%" id="downloads" textAlign="left">
              <p>Downloads</p>
              <h1>30.3k</h1>
            </GridColumn>
            <GridColumn id="reviews" width="25%" textAlign="left">
              <p>Reviews</p>
              <h1>1200+</h1>
            </GridColumn>
          </GridRow>

        </GridRow>
      </GridWrap>

      <div className="ellipse-red"></div>
      <div className="ellipse-blue"></div>
      <div id="star-small"></div>
      <div id="star-large"></div>
    </section>
  );
}

export default MainInfo;
