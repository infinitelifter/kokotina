import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem } from "./actions";
import { ApplicationState } from "../../reducers";
import "./styles.css";

interface Props {
  addItem: (item: string) => void;
  items: string[];
}

class Form extends React.Component<Props> {
  state = {
    inputValue: ""
  };

  updateInputValue = (evt: any) => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  handleFormSubmit = (input: string) => {
    const { addItem, items } = this.props;
    const regexCheck = /\s/;

    if (
      input !== "" &&
      !regexCheck.test(input) &&
      items.indexOf(input) === -1
    ) {
      addItem(input);
    }
  };

  render() {
    const { items } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="sortingForm">
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <button type="button" onClick={() => this.handleFormSubmit(inputValue)}>
          Submit
        </button>
        {items.map((item: string) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  items: state.formReducer.items
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      addItem
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
