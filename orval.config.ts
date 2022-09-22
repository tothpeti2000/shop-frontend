import { defineConfig } from "orval";

export default defineConfig({
  shop: {
    input: {
      target: "../shop-backend/API/swagger.json",
    },
    output: {
      target: "src/api/index.ts",
      schemas: "src/models",
      client: "react-query",
      override: {
        mutator: {
          path: "src/api/client.ts",
          name: "useClient",
        },
      },
      prettier: true,
    },
  },
});
