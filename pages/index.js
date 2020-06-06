import React, { Component } from "react";
import { getData } from "../lib/gson";
import Layout from "../components/Layout";
import Hobby from "../components/Hobby";

export default function Index({ gson, preview }) {
  //   console.log(gson);

  return (
    <Layout>
      <section id="nav">{/* nav */}</section>
      <section id="grid">
        <div id="intro">
          <h1>
            <strong>i'm dean</strong>
          </h1>
          <h2>goofing is good</h2>
        </div>
        <div id="hobbies">
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
        </div>
      </section>
      <style jsx>{`
        //
      `}</style>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  //   const sheetsURL = process.env.URL;

  //   const gson = await getData(sheetsURL);

  const gson = [
    { title: "hi", msg: "lorem" },
    { title: "hi", msg: "lorem" },
    { title: "hi", msg: "lorem" },
    { title: "hi", msg: "lorem" },
    { title: "hi", msg: "lorem" },
    { title: "hi", msg: "lorem" },
  ];
  return {
    props: { gson }, // will be passed to the page component as props
  };
}
