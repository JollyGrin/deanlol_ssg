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
        "background-image": `url("${this.process.backgroundIMG()}")`,
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
          }

          a:hover {
            opacity: 0.5;
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
