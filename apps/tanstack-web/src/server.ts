import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

const canonicalHostname = "www.alsos.dev";
const redirectHostnames = new Set([
  "krokeide.no",
  "marketing.krokeide.no",
  "alsos.dev",
  "www.krokeide.no",
  "marketing.alsos.dev",
]);

export default createServerEntry({
  fetch(request) {
    const url = new URL(request.url);

    if (redirectHostnames.has(url.hostname)) {
      url.protocol = "https:";
      url.hostname = canonicalHostname;
      return Response.redirect(url, 308);
    }

    return handler.fetch(request);
  },
});
