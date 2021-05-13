import React, {Component} from 'react';
import Radium from "radium";
import './Car.css';

class Car extends Component{

    componentWillReceiveProps(nextProps) {
        console.log('Car  componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car  shouldComponentUpdate', nextState, nextProps)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car  componentWillUpdate',nextState, nextProps)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Car getDerivedStateFromProps', nextProps, prevState)
        return{
            prevState
        }
    }

    componentDidUpdate() {
        console.log('Car  componentDidUpdate')
    }

    getSnapshotBeforeUpdate(){
        console.log('Car getSnapshotBeforeUpdate')
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    render() {

        console.log('Car render')

        const inputClasses = ['input']

        if(this.props.name!==''){
            inputClasses.push('green')
        }else{
            inputClasses.push('red')
        }

        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }

        const style = {
            border:'1px solid #ccc',
            boxShadow:'0 4px 5px 0px rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 5px 0px rgba(0, 0, 0, .25)',
                cursor:'pointer'
            }
        }

        return (
            <div className='Car' style={style}>
                <h3>Car Name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car;


