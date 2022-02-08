import React, {useState, useEffect} from 'react';
import {GridRow, GridColumn} from "emotion-flex-grid";

const Features = (props) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf').then((res) => res.json()).then((data) => setData(data.slice(0, 6)));
  }, []);

  return (
    <section id="feature-container">
      <GridRow id="features" wrap="wrap" direction={['column', 'column', 'row']} justify={['center', 'center', 'between']} align="center">
        <p id="feature-header">Experience The Cardo</p>
        {data.map((item, ind) => {
          return (
            <GridColumn pl="xl" mt="l" mb="l" width={['80%', "80%", '28%']} className="feature" textAlign="left">
              <p className="feature-number">Feature #{ind+1}</p>
              <p className="feature-description">{item.description}</p>
              <a href={item.button.link}><button className="feature-button">{item.button.text}</button></a>
            </GridColumn>
          )
        })}
      </GridRow>
    </section>
  );
}

export default Features;
