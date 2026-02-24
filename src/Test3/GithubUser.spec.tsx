import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import GithubUser from "./GithubUser";

const server = setupServer(
  http.get("https://api.github.com/users/DavideNicolosi7", () => {
    return HttpResponse.json({
      id: 1,
      name: "Davide Nicolosi",
      login: "DavideNicolosi7",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<GithubUser />", () => {
  it("shows a user from Github", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <GithubUser username="DavideNicolosi7" />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const element = screen.getByText("DavideNicolosi7");
      expect(element).toBeInTheDocument();
    });
  });
});
