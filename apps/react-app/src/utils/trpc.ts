import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "trpc-api/src/router";

export const trpc = createReactQueryHooks<AppRouter>();
