import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ul">
               <ul>
                    {this.props.todo.map((el) => {
                            return (
                                <li key={el.id} className="li">{el.input1}
                                    <i class="fas fa-trash" onClick={()=>{this.props.delete(el.id)}}></i>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.main
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch({ type: 'REMOVE_INPUT', id: id })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Main);