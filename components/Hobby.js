import React, { Component, Fragment } from "react";

export default class Hobby extends Component {
  constructor(props) {
    super(props);
  }

  process = {
    backgroundIMG: () => {
      return this.props.data.imageurl;
    },
    textColor: () => {
      if (this.props.data.textcolor) {
        return this.props.data.textcolor;
      } else {
        return "inherit";
      }
    },
    url: () => {
      if (this.props.data.url) {
        return this.props.data.url;
      } else {
        return "#";
      }
    },
  };

  render() {
    const styles = {
      backgroundURL: {
        backgroundImage: `url("${this.process.backgroundIMG()}")`,
        color: this.process.textColor(),
      },
    };
    return (
      <Fragment>
        <div className="hobby" style={styles.backgroundURL}>
          <h3>
            <a href={this.process.url()}>{this.props.data.title}</a>
          </h3>
          <span>{this.props.data.message}</span>
        </div>

        <style jsx>{`
          h3 {
            font-size: 1.5em;
            font-family: "Abril Fatface";
            padding-bottom: 0.5em;
          }

          a {
            text-decoration: none;
            color: inherit;
            opacity: 0.8
            transition: text-shadow 0.25s ease-in-out;
            -moz-transition: text-shadow 0.25s ease-in-out;
            -webkit-transition: text-shadow 0.25s ease-in-out;
          }

          a:hover {
            opacity: 1;
            text-shadow: 5px 5px #e7cc98;
          }

          .hobby {
            background-color: #75c9c8;
            color: #363636;
            padding: 2em;
            border-radius: 0.3em;
            background-size: cover;
            align-content: center;
          }
        `}</style>
      </Fragment>
    );
  }
}
