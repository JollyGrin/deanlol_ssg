import React, { Component, Fragment } from "react";

export default class Hobby extends Component {
  constructor(props) {
    super(props);
  }

  between = (x, min, max) => {
    // console.log(x, min, max, (x - min) * (x - max) <= 0);
    return (x - min) * (x - max) <= 0;
  };

  process = {
    backgroundColor: () => {
      return "#F5E795";
    },
    backgroundIMG: () => {
      if (!this.props.data.imageurl) {
        return "#";
      }
      return this.props.data.imageurl;
    },
    textColor: () => {
      if (this.props.data.textcolor) {
        return this.props.data.textcolor;
      } else {
        return "inherit";
      }
    },
    textShad: () => {
      if (this.props.data.textcolor) {
        return "2px 2px 2px rgba(54, 54, 54, 0.8)";
      }
    },
    url: () => {
      if (this.props.data.url) {
        return this.props.data.url;
      } else {
        return "/";
      }
    },
  };

  render() {
    const styles = {
      backgroundURL: {
        backgroundImage: `url("${this.process.backgroundIMG()}")`,
        color: this.process.textColor(),
        backgroundColor: this.process.backgroundColor(),
        textShadow: this.process.textShad(),
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
          .hobby {
            box-shadow: 2px 2px 0.2em rgba(54, 54, 54, 0.15);
            transition: box-shadow 0.35s ease-in-out;
            -moz-transition: box-shadow 0.35s ease-in-out;
            -webkit-transition: box-shadow 0.35s ease-in-out;
          }

          .hobby:hover {
            box-shadow: 5px 5px 0.5em rgba(54, 54, 54, 0.3);
          }

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
