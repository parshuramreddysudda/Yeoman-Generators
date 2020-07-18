import React, { Component } from 'react'

export default class Application  extends Component {

    render() {
        let { application , loading, updating, error } = this.props;
        return (
            <div>
                {/* Application  Component is added with default Redux states configured */}

                Hello there you have successfully created your Application Redux app
            </div>
        )
    }
}
