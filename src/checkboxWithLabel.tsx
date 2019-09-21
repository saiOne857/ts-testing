import * as React from "react";

interface Props {
  labelOn: string;
  labelOff: string;
}
export class CheckboxWithLabel extends React.Component< Props, {
  isChecked: boolean
}> {
  constructor(props : Props) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
