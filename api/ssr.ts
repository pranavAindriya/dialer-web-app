import { renderPage } from "vike/server";

export default async function handler(req: any, res: any) {
  const { url } = req;
  const pageContextInit = { urlOriginal: url };

  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    res.statusCode = 404;
    res.end("Page not found");
    return;
  }

  const { body, statusCode, headers } = httpResponse;

  res.statusCode = statusCode;
  for (const [name, value] of headers) {
    res.setHeader(name, value);
  }
  res.end(body);
}
