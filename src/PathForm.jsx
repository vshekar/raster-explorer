import React from 'react';
import axios from 'axios';

export class PathForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: '00LysTest01_1/Lys01_Raster_36_master/entry/data', message: 'Enter a valid path'}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ ...this.state, value: event.target.value })
    }

    handleSubmit(event) {
        let url = 'http://localhost:8000/api/v1/node/search/'+ this.state.value
        var self = this
        
        axios.get(url)
            .then(function (response){
                console.log(response.data.data);
                let validPath = true
                for (var ob of response.data.data) {
                    if (ob.attributes.structure_family !== 'array'){
                        validPath = false
                        break;
                    }
                }
                if (validPath){
                    self.setState({ ...self.state, message: 'Valid path' })
                    self.props.setPath(url, response.data.data)
                }
                else{
                    self.setState({ ...self.state, message: 'Invalid path'})
                }
                 
            })
            .catch(function(error){
                console.log(error);
                self.setState({ ...self.state, message: 'Invalid path' })
            })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    File path: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <p>{this.state.message}</p>
            </form>
        )
    }
}

