import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css'
class Input extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="inbtn"> 
            <h2 className="h2">ADD LIST</h2>
                <input className="input" type="text" placeholder="Ecrire Votre Texte Ici" onChange={(e)=>{this.props.handleChange(e.target)}} required/>
                <button className="btn" onClick={()=>{this.props.add(this.props.input)}}>ADD</button>
            </div>
         );
    }
}
const mapStateToProps =(state)=>{
    return {
        input:state.input
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        handleChange:(target)=>{
            dispatch({type:'SET_INPUT',value:target.value})
        },
        add:(input)=>{
            let obj ={}
            let id=Math.floor(Math.random()*1000)
            let input1= input
            obj ={id,input1}
            dispatch({type:'ADD_INPUT',input:obj})
        }
    }
}
 
export default connect (mapStateToProps,mapDispatchToProps)(Input);