import { Button } from "@productsway/ui";
import { trpc } from "../utils/trpc";

export default function Web() {
  const { data, error, isLoading } = trpc.useQuery(["hello", { text: "web" }]);

  // show error if fetch issue
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div>{data?.greeting}</div>}
      <Button name="Greet" onClick={console.warn} />
    </div>
  );
}
