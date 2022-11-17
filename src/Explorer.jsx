import React from 'react';
import { PathForm } from './PathForm'
import { ButtonGrid } from './ButtonGrid'


export class Explorer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {path: '', data: '', rows: 0, cols: 0}
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