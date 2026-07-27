import React, { Component } from "react";
import { getData } from "../lib/gson";
import Layout from "../components/Layout";
import Hobby from "../components/Hobby";
import Icon from "../components/Icon";

export default function Index({ gson, preview }) {
  return (
    <Layout>
      {/* <section id="nav"></section> */}
      <section id="grid">
        <div id="intro">
          <h1>
            <strong>i'm dean</strong>
          </h1>
          <h2>goofing is good</h2>
        </div>
        <div id="hobbies">
          {gson.map((row, index) => (
            <Hobby key={index + row.title} data={row} />
          ))}
        </div>
      </section>
      <footer>
        <Icon link={"https://twitter.com/dmasley"} fa={"fab fa-twitter"} />
        <Icon link={"https://github.com/JollyGrin"} fa={"fab fa-github"} />
        <Icon
          link={
            "https://medium.com/@dmasley/running-towards-a-post-scarcity-economy-3d03aa27682f"
          }
          fa={"fab fa-medium-m"}
        />
        <Icon
          link={"https://www.youtube.com/channel/UCNLJ9gzT_wVT8wbX8OVuaCA"}
          fa={"fab fa-youtube"}
        />
      </footer>
      <style jsx>{`
        //
      `}</style>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.URL;

  const gson = await getData(sheetsURL);

  // const gson = [
  //   { title: "hi", msg: "lorem" },
  //   { title: "hi", msg: "lorem" },
  //   { title: "hi", msg: "lorem" },
  //   { title: "hi", msg: "lorem" },
  //   { title: "hi", msg: "lorem" },
  //   { title: "hi", msg: "lorem" },
  // ];
  return {
    props: { gson }, // will be passed to the page component as props
  };
}
