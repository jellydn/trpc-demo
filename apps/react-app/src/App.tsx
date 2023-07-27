import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Hello from "./Hello";
import { trpc } from "./utils/trpc";

export default function App() {
  const [queryClient, setQueryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/trpc",
      headers: {},
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
