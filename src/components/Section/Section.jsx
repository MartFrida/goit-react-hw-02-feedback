import React from "react";
import { StyledHeader } from "../Feedback/Feedback.styled";

export class Section extends React.Component {
  render() {
    const { children, title } = this.props;
    return (<>
      {title && <StyledHeader>{title}</StyledHeader>}
      <div>{children}</div>
    </>)
  }
}