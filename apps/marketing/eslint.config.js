import { nextJsConfig } from "@alsos/eslint-config/next-js"

/** @type {import("eslint").Linter.Config} */
export default nextJsConfig & {
  ignores: [".next"]
}
