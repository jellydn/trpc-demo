import * as trpc from "@trpc/server";
import { z } from "zod";

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const appRouter = trpc
  .router()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getUserById", {
    input: z.string(),
    async resolve({ input }) {
      return users[input]; // Input type is string
    },
  })
  .mutation("createUser", {
    // Validate input with Zod
    input: z.object({
      name: z.string().min(3),
      bio: z.string().max(142).optional(),
    }),
    async resolve({ input }) {
      const id = Date.now().toString();
      const user: User = { id, ...input };
      users[user.id] = user;
      return user;
    },
  });

// Export type definition of API
export type AppRouter = typeof appRouter;
