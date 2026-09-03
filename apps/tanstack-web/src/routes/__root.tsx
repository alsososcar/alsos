import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Navigation from "#/components/Navigation";
import { ThemeProvider } from "#/components/theme/ThemeProvider";

import Footer from "../components/Footer";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Oscar Krokeide Alsos – Portfolio",
      },
      {
        name: "description",
        content:
          "Portfolio for Oscar Krokeide Alsos — fagbrev i IT-utvikling. Prosjekter innen webutvikling, integrasjoner, API-er og databasesystemer.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col font-sans wrap-anywhere antialiased selection:bg-[rgba(79,184,178,0.24)]">
        <ThemeProvider>
          <Navigation />
          <div className="mx-auto flex w-full max-w-250 flex-1 justify-center">
            {children}
          </div>
          <Footer />
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
