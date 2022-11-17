import React from 'react'

export const MContext = React.createContext();

export class ContextProvider extends React.Component {
    state = {path: ""}

    render() {
        return (
            <MContext.Provider value={
                {state: this.state,
                setPath: (value) => this.setState({ ...this.state, path: value })}
            }>
                {this.props.children}
            </MContext.Provider>
        )
    }
}