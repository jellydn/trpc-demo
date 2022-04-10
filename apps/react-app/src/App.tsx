import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Hello from "./Hello";
import { trpc } from "./utils/trpc";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/trpc",
      headers: {},
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {/* @ts-expect-error Type '{ children: Element; client: QueryClient; }' is not assignable to type 'IntrinsicAttributes & QueryClientProviderProps' */}
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
