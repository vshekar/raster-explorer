import React from 'react'


export class ButtonGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const grid = []
        for (let i =0; i< this.props.rows; i++){
            let row = []
            for (let j=0; j< this.props.cols; j++){
                row.push(<td key={[i, j].toString()}><button>{i}, {j}</button></td>)
            }
            grid.push(<tr key={i}>{row}</tr>)
        }
        return (
            <table>
                <tbody>
                {grid}
                </tbody>
                
            </table>
        )
    }
}