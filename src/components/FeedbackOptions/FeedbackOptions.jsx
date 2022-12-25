import { Component } from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends Component{
    render(){
        const {mas} = this.props;
        return(
            <div>
                {mas.map((mas,i)=><button key={i} type="button" name={mas} onClick={this.props.onLeaveFeedback}>{mas}</button>)}
            </div>
        );
    }
}
FeedbackOptions.propTypes ={
   onLeaveFeedback:  PropTypes.func,
   mas: PropTypes.arrayOf(PropTypes.string.isRequired),
}
export default FeedbackOptions;