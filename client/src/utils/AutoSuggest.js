import React from "react";
import Autosuggest from "react-autosuggest";

class Autosuggestion extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
      enter: false,
    };
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.data.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = (suggestion) => suggestion.name;

  renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  onChange = (event, { newValue }) => {
    if (this.props.search) {
      this.props.searchTermHandler(newValue);
    }
    this.setState({
      value: newValue,
    });
  };

  onKeyPressHandler = (e) => {
    if (this.props.tagsProps) {
      if (e.key === "Enter") {
        this.props.onClickTags(this.state.value);
        this.setState({
          value: "",
        });
      }
    }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholderProps,
      value,
      onChange: this.onChange,
      onKeyDown: this.onKeyPressHandler,
      className: this.props.classNameProps,
      type: "text"
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Autosuggestion;
