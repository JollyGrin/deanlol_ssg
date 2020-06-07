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
      const x = Math.random() * Math.random();
      const step = [0, 0.2, 0.4, 0.6, 0.8, 0.9];
      const test = {
        a: this.between(x, step[0], step[1]),
        b: this.between(x, step[1], step[2]),
        c: this.between(x, step[2], step[3]),
        d: this.between(x, step[3], step[4]),
        e: this.between(x, step[4], step[5]),
      };

      const res = {
        a: "#F5E795",
        b: "#FFD19C",
        c: "#F5BA95",
        d: "ECB755",
        e: "B0E8CB",
        f: "C382E8",
      };
      let color;

      switch (true) {
        case test.a:
          return res.a;
        case test.b:
          return res.b;
        case test.c:
          return res.c;
        case test.d:
          return res.d;
        case test.e:
          return res.e;
        default:
          return res.f;
      }
    },
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
        backgroundColor: this.process.backgroundColor(),
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
