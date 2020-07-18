import React, { Component } from 'react'

export default class <%= componentUpper %>  extends Component {

    render() {
        let { <%= componentLower %> , loading, updating, error } = this.props;
        return (
            <div>
                {/* <%= componentUpper %>  Component is added with default Redux states configured */}

                Hello there you have successfully created your <%= componentUpper %> Redux app
            </div>
        )
    }
}
