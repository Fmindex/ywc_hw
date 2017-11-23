import React, { Component } from 'react';

class Tag extends Component {
    render() {
        let tagStyle = this.props.isActive ? 
         { height: 40, backgroundColor: 'red', display: 'inline-block', margin: 8, cursor: 'pointer' }
         : 
         { height: 40, backgroundColor: 'green', display: 'inline-block', margin: 8, cursor: 'pointer' } ;

        return (
            <div style={tagStyle} onClick={() => this.props.onClick(this.props.major)}>
                {this.props.text}
            </div>
        );
    }
}
export default Tag;