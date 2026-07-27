import React, { Component, Fragment } from "react";

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <span>
          <a href={this.props.link}>
            <i className={this.props.fa}></i>
          </a>
        </span>

        <style jsx>{`
          a {
            color: #363636;
            opacity: 0.3;
            transition: opacity 0.25s ease-in-out;
            -moz-transition: opacity 0.25s ease-in-out;
            -webkit-transition: opacity 0.25s ease-in-out;
          }

          a:hover {
            opacity: 0.9;
          }
        `}</style>
      </Fragment>
    );
  }
}
