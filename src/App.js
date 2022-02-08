import React from "react";
import "./App.css";
import { getLCP, getFID, getCLS } from "web-vitals";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

import MainInfo from './components/MainInfo';
import HandImage from './components/HandImage';
import CardsImage from './components/CardsImage';
import Features from './components/Features';

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

function App() {
  return (
    <div className="App">
      <section className="container">
        <GridColumn>

          <GridWrap maxWidth="none" wrap="wrap">

            <GridRow justify="center" direction={['column', 'column', 'row']}>

              <GridColumn width={['100%', '100%', '100%']} mt={['m', 'xs', 'l']}>
                <MainInfo />
              </GridColumn>

              <GridColumn width={['380px', '380px', '380px', '430px', '480px']} flex="none" display={['none', 'none', 'block']}>
                <HandImage />
              </GridColumn>

              <GridColumn width='100%' display={['block', 'block', 'none']} mt="xxl" mb="xxl">
                <CardsImage />
              </GridColumn>

            </GridRow>

            <GridRow justify="center" wrap="wrap" width="100%">
              <Features />
            </GridRow>

          </GridWrap>

        </GridColumn>
      </section>
    </div>
  );
}

export default App;
