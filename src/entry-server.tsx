import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Router from "./Router";

export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <Router />
      </StaticRouter>
    </StrictMode>,
  );

  return { html };
}
