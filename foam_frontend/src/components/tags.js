import React, { Component } from 'react';

class Tags extends Component {
    state = {
        plus: false,
        tag: '',
    }

    componentDidMount = () => {
        if(!!this.props.tag){
            this.setState({
            tag: this.props.tag.name
            })
        }
    }

    handleClick = () => {
        this.setState({
            plus: true
        })
    }

    handleAddTag = (event) => {
        fetch('http://localhost:3000/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tag: {
                   name: event.target.value,
                   image_id: this.props.imageId
                }
            })
        })
        .then(res => res.json())
        .then(tag =>
        this.setState(prevState => {
            return {
                ...prevState,
                plus: false,
                tags: tag.data.attributes.name
            }
        })
        )
    }

    renderAddTags = () => {
        if(!!this.state.plus){
            return [ <button value="#foaming" style={{border:'none'}} onClick={event => this.handleAddTag(event)}>#foaming</button>, 
                <button value="#notfoaming" style={{border:'none'}} onClick={event => this.handleAddTag(event)}>#notfoaming</button>]
        }
    }

    render(){
        return (
        <div style={{textAlign:"left"}}>
            tags: {this.state.tag}
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={event => this.handleClick()}>+</button>
            {this.renderAddTags()}
        </div>
        );
    }
}

export default Tags;