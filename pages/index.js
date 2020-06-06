import React, { Component } from "react";
import { getData } from "../lib/gson";

export default function Index({ gson, preview }) {
  console.log(gson);

  return (
    <>
      <h1>hello world</h1>
      {gson.map((obj) => (
        <span key={Math.random()}>
          {obj["Credits"]}
          <br />
        </span>
      ))}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTC68bQEfRJiW6rZ8cgyhAq5SmLeu6b8M_trQL48i7iHAv8MfLVLVeSagRDDElhsGQCBb1iRIYaMHqR/pub?output=csv";

  const gson = await getData(sheetsURL);
  return {
    props: { gson }, // will be passed to the page component as props
  };
}
