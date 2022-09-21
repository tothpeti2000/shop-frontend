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
      // TODO: Modify the name of generated hooks
      override: {
        operationName: (operation, route, verb) =>
          `${verb}${route}${operation.description}`,
      },
    },
  },
});
