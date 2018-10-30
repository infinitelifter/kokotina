import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem } from "./actions";
import { ApplicationState } from "../../reducers";

interface Props {
  addItem: (item: string) => void;
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
    const { addItem } = this.props;
    console.log("KOKOT", input);

    addItem(input);
  };

  render() {
    const { addItem } = this.props;
    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.inputValue}
            onChange={evt => this.updateInputValue(evt)}
          />
        </label>
        {/* <button onClick={() => this.handleFormSubmit(this.state.inputValue)}> */}
        <button onClick={() => addItem(this.state.inputValue)}>Submit</button>
      </form>
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
