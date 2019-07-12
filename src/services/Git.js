import Octokit from "@octokit/rest";

const octokit = Octokit({
  auth: process.env.REACT_APP_TOKEN,
  userAgent: "about-me v0.1.0",
  baseUrl: "https://api.github.com",
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0
  }
});
window.octokit = octokit;
export default octokit;
