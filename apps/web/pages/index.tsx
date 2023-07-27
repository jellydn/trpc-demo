import { Button } from "@productsway/ui";
import { trpc } from "../utils/trpc";

export default function Web() {
  const helloWithParam = trpc.useQuery([
    "hello",
    { text: "trpc demo with nextjs" },
  ]);
  const helloWithoutParam = trpc.useQuery(["hello"]);

  // Show error if fetch issue
  if (helloWithoutParam.error ?? helloWithParam.error) {
    return (
      <div>
        {helloWithoutParam.error?.message ?? helloWithParam.error?.message}
      </div>
    );
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
