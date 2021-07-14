import React from "react";
import NextHead from "next/head";
const Head: React.FC<{ title?: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <NextHead>
      <title>{title || "Twitter Clone"}</title>
      <meta
        name="description"
        content={description || "Twitter Clone made in nextjs"}
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
