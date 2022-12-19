import '@h5web/lib/dist/styles.css';

import React from 'react';
import ndarray from 'ndarray';
import { HeatmapVis, getDomain } from '@h5web/lib';
import { Explorer } from './Explorer';
import { ButtonGrid } from './ButtonGrid';


function App() {
    const values = [[1,2,3],[4,5,6]];
        const flatValues = values.flat(Infinity);
        const dataArray = ndarray(flatValues, [2, 3]);
        const domain = getDomain(dataArray);
  return (
    <>
    <Explorer dataArray = { dataArray } domain = { domain } />
    <ButtonGrid rows = { 3 } cols = { 3 }/>
    </>
  );
}

export default App;