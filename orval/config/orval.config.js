module.exports = {
  shop: {
    input: "./swagger.json",
    output: {
      target: "../shop.ts",
      client: "react-query",
      mode: "tags",
    },
  },
};
