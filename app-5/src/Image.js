import React, { Component } from "react";

class Image extends Component {
    render(){
        return (
            <div>
                <img src={this.props.image} />
                <caption>Error 409</caption>

            </div>
        )
    }
}

export default Image;