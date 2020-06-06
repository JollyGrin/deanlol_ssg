import React, { Component } from "react";
import { getData } from "../lib/gson";
import Layout from "../components/Layout";

export default function Index({ gson, preview }) {
  //   console.log(gson);

  return (
    <Layout>
      <section id="nav">{/* nav */}</section>
      <section id="grid">
        <div id="intro">
          <h1>dean</h1>
        </div>
        <div id="hobbies">
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
          <div className="hobby">
            <span>title</span>
          </div>
        </div>
      </section>
      <style jsx>{`
        #grid {
          display: grid;
          justify-content: center;
          align-content: center;
          height: 90vh;
          padding: 2rem;
        }

        #intro {
          padding: 3rem;
          justify-self: center;
          align-self: center;
        }

        #hobbies {
          display: grid;

          grid-gap: 1em;
        }

        .hobby {
          background-color: grey;
          border-radius: 1em;
          padding: 1em;
          height: 4rem;
        }

        @media (min-width: 600px) {
          #grid {
            grid-template-columns: 3fr 7fr;
          }
          #hobbies {
            grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
          }
        }

        @media (max-width: 600px) {
          #grid {
            color: white;
            grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
          }

          #hobbies {
            grid-template-columns: 90vw;
          }
        }
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
