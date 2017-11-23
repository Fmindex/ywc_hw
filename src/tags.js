import React, { Component } from 'react';

import Tag from './tag';

class Tags extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <Tag text="WEB CONTENT" isActive={this.props.isActive["content"]} onClick={this.props.onTagClick} major="content"/>
                <Tag text="WEB DESIGN" isActive={this.props.isActive["design"]} onClick={this.props.onTagClick} major="design" />
                <Tag text="WEB MARKETING" isActive={this.props.isActive["marketing"]} onClick={this.props.onTagClick} major="marketing" />
                <Tag text="WEB PROGRAMMING" isActive={this.props.isActive["programming"]} onClick={this.props.onTagClick} major="programming" />
            </div>
        );
    }
}
export default Tags;