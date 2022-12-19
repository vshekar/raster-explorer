import React from 'react';
import { PathForm } from './PathForm'
import { ButtonGrid } from './ButtonGrid'
import ndarray from 'ndarray';
import { ColorBar, HeatmapVis, getDomain } from '@h5web/lib';
import axios from 'axios';



export class Explorer extends React.Component {
    constructor(props) {
        super(props)
        const values = [[1,2,3],[4,5,6]];
        const flatValues = values.flat(Infinity);
        const dataArray = ndarray(flatValues, [2, 3]);
        const domain = getDomain(dataArray);
        this.state = {path: '', data: '', rows: 0, cols: 0, array_data: dataArray, domain:domain}
        this.get_data();
     }


    get_data = () => {// Initialise source 2D array
        var self = this
        axios.get('http://localhost:8000/api/v1/array/full/00LysTest01_1/Lys01_Raster_36_master/entry/data/data_000001?slice=0,:')
            .then(function (response){
                console.log(response.data)
                const values = response.data;
                // Flatten source array
                const flatValues = values.flat(Infinity);

                // Convert to ndarray and get domain
                const dataArray = ndarray(flatValues, [values.length, values[0].length]);
                const domain = getDomain(dataArray);
                self.setState({ ...self.state, array_data: dataArray, domain: domain})
        })

            

        }
    
    setPath = (path, data) => {
        console.log(data);
        let rows = data.length
        let cols = data[0].attributes.structure.macro.shape[0]
        this.setState({path: path, data: data, rows: rows, cols: cols});
     }

     render() {
        return (
            <>
            <PathForm setPath = {this.setPath} />
            <p>Explorer rows: { this.state.rows } cols: { this.state.cols }</p>
            <ButtonGrid rows = { this.state.rows } cols = {this.state.cols}/>
            
               
            </>
            
        )
    }
    }