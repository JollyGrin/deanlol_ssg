import React, { Component, Fragment } from "react";
import Head from "next/head";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>dean's goofs</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          />
          <link rel="stylesheet" type="text/css" href="css/reset.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Indie+Flower&family=Josefin+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="css/styles.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}
