import { tanstackConfig } from "@alsos/eslint-config/tanstack";

export default tanstackConfig({
  tsconfigRootDir: import.meta.dirname,
}).concat({
  ignores: ["dist/**", ".tanstack/**", ".wrangler/**", "src/routeTree.gen.ts"],
});
