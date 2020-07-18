import React, { Component } from 'react'

export default class Network  extends Component {

    render() {
        let { network , loading, updating, error } = this.props;
        return (
            <div>
                {/* Network  Component is added with default Redux states configured */}

                Hello there you have successfully created your Network Redux app
            </div>
        )
    }
}
