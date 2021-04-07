import React, {Component} from 'react';
import Button from '../components/Button';
import Keypad from '../components/Keypad';
import Display from '../components/Display';
import backend from '../api/Backend'
import '../assets/styles.css';

class Calculator extends Component {

    constructor() {
        super();
        this.state = { 
            data: '', 
            loading: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.send_formula = this.send_formula.bind(this);
    }

    send_formula = () => {
        console.log("sending to api");
        console.log(this.state.data)
        this.state.loading = true;
        backend.Execute(this.state.data)
        .then((response) => {
            this.setState({ data: response.data.data });
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            this.state.loading = false;
        });
    }

    handleClick = e => {
        if (!this.state.loading) {
            const value = e.target.getAttribute('data-value');
            switch(value) {
                case 'clear':
                    this.setState({ data: ''});
                    break;
                case 'equal':
                    this.send_formula();
                    break;
                default:
                    this.setState({ data: this.state.data + value});
            }
        }
    }

    render(){
        return(
            <div className="Calculator">
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="(" value="(" /> 

                    <Button onClick={this.handleClick} label="x" value="*" /> 
                    <Button onClick={this.handleClick} label="9" value="9" />   
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label=")" value=")" /> 

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" value="+" /> 
                    <Button onClick={this.handleClick} label="^" value="**" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />

                </Keypad>
            </div>
        );
    }
}

export default Calculator;