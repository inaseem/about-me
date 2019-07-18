import Octokit from "@octokit/rest";

console.log(process.env);

const octokit = Octokit({
  // auth: process.env.REACT_APP_TOKEN,
  auth: "23dc12658e3ca56d36d064375ee95eca4e088382",
  userAgent: "about-me v0.1.0",
  baseUrl: "https://api.github.com",
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
  request: {
    agent: "about-me v0.1.0",
    fetch: undefined,
    timeout: 0
    // headers: {
    // "Access-Control-Allow-Origin": "*",
    // "If-Modified-Since": new Date()
    // }
  }
});
window.octokit = octokit;
export default octokit;
