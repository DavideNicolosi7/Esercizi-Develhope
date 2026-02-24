import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
const handlers = [
  http.get("https://api.github.com/users/:username", () => {
    return HttpResponse.json({
      id: 1,
      login: "johndoe",
      avatar_url: "",
    });
  }),
  http.get("https://api.github.com/users", () => {
    return HttpResponse.json({
      id: 2,
      login: "DavideNicolosi7",
      avatar_url: "",
    });
  }),
];
export const server = setupServer(...handlers);
