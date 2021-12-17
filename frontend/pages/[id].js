import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Links from "../components/Links";

export default function ZippedLink({ links }) {
  return (
    <div>
      {links.map((link) => {
        return <div key={link.link}>{link.link}</div>;
      })}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const API_LINK = "http://127.0.0.1:8000/api/getlinks/" + id;

  const resp = await fetch(API_LINK);
  const links = await resp.json();

  return {
    props: {
      links,
    },
  };
};
