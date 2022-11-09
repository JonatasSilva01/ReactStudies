import React, { Component } from "react";
import './styles.css'

export class Button extends Component {
    render(){
        const { onClick, text, disabled } = this.props;
        return <button disabled={disabled} className="btn" onClick={onClick}>{text}</button>;
    }
}