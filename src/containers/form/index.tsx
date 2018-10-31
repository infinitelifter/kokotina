import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions";
import { ApplicationState } from "../../reducers";
import ItemsList from "../../components/list/index";
import "./styles.css";

interface Props {
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
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

  handleFormSubmit = () => {
    const { addItem, items } = this.props;
    const { inputValue } = this.state;

    const regexCheck = /\s/;

    if (
      inputValue !== "" &&
      !regexCheck.test(inputValue) &&
      items.indexOf(inputValue) === -1
    ) {
      addItem(inputValue);
    }
  };

  render() {
    const { items, removeItem } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="sortingForm">
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <button type="button" onClick={() => this.handleFormSubmit()}>
          Submit
        </button>
        {items.map((item: string) => (
          <ItemsList item={item} removeItem={removeItem} />
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
      addItem,
      removeItem
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
