import React, { Component } from "react";
import GoalWidget from '../Components/GoalWidget.js'
import '../CSS/GoalList.css';

class GoalList extends Component{
    state = {
        topGoals: ["goal1", "goal2", "goal3"]
    };

    render(){
        return(
            <div className="allGoals">
                <p>All Goals</p>
                <table>
                    <tr>
                        <td><GoalWidget goalWidget={this.props.goalWidget}/></td>
                        <td><GoalWidget goalWidget={this.props.goalWidget}/></td>
                        <td><GoalWidget goalWidget={this.props.goalWidget}/></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default GoalList;