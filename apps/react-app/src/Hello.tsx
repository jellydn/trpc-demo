import React from "react";
import { Button } from "@productsway/ui";

import { trpc } from "./utils/trpc";

export default function Hello() {
  const helloWithParam = trpc.useQuery([
    "hello",
    { text: "trpc demo with reactjs" },
  ]);
  const helloWithoutParam = trpc.useQuery(["hello"]);

  // Show error if fetch issue
  if (helloWithoutParam.error ?? helloWithParam.error) {
    return <div>Failed to fetch. Please check your console.</div>;
  }

  return (
    <div>
      {helloWithoutParam.isLoading ? (
        <div>Loading...</div>
      ) : (
        <p>{helloWithoutParam.data?.greeting}</p>
      )}
      {helloWithParam.isLoading ? (
        <div>Loading...</div>
      ) : (
        <p>{helloWithParam.data?.greeting}</p>
      )}
      <Button name="Greet" onClick={console.warn} />
    </div>
  );
}
