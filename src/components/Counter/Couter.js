import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as actions from "../../redux/counter/counter-actions";
import "./Counter.css";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = ({ counter }) => ({
  value: counter.value,
  step: counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
