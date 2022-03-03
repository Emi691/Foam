import React, { Component } from 'react';

class Tags extends Component {
    state = {
        plus: false,
        tags: ['#foaming', '#notfoaming'],
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
        .then(tag => console.log(tag))
    }

    renderAddTags = () => {
        if(!!this.state.plus){
            return this.state.tags.map(tag => <button value={tag} onClick={event => this.handleAddTag(event)}>{tag}</button>)
        }
    }

    render(){
        return (
        <div style={{backgroundColor:"yellow", textAlign:"left"}}>
            tags: 
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={event => this.handleClick()}>+</button>
            {this.renderAddTags()}
        </div>
        );
    }
}

export default Tags;