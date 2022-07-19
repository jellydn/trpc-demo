import fp from "fastify-plugin";

export type SupportPluginOptions = {
  // Specify Support plugin options here
};

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, _opts) => {
  void fastify.decorate("someSupport", () => "hugs");
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export type FastifyInstance = {
    someSupport(): string;
  };
}
