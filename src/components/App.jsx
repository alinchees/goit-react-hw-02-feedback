import { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification";
import "./style.css";
  class App extends Component{
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
    addFetback=(event)=>{
      const{name}= event.currentTarget;
      this.setState((prev)=>({
            [name]: prev[name] + 1
          }))
    }
    countTotalFeedback(){
        return this.state.good + this.state.neutral + this.state.bad;
      }
    countPositiveFeedbackPercentage(){
      const positive = Math.round((this.state.good / this.countTotalFeedback()) * 100) 
      return positive;
      }
      render(){
      const{good,neutral,bad} = this.state;
      return ( 
    <> 
    <h2>Please leave feedback</h2>
    <FeedbackOptions  onLeaveFeedback={this.addFetback} mas={Object.keys(this.state)}/> 
    <h2>Statistics</h2> 
    {this.countPositiveFeedbackPercentage()?
     <Statistics  good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
     :<Notification message="There is no feedback"/>}
    
    </>
    
  );
    }
  }
  export default App;
