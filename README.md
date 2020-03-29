# Chicago API: Chicago-Style Title Capitalization

![Jest status badge](https://github.com/victoriadrake/chicago-api/workflows/jest/badge.svg)

A Node.js server that tries to be helpful by capitalizing your title string in something _probably pretty close to_ title case according to the Chicago Manual of Style.

I'm just a quick weekend project. Please don't use me in production. 🙈

## Usage

Clone and build the project:

```sh
git clone https://github.com/victoriadrake/chicago-api.git
npm install
tsc
```

Run server locally:

```sh
node dist/index.js
```

The port is `8080` by default. You can specify one instead by appending it:

```sh
node dist/index.js 5432
```

In another terminal, send your title string as `title` query parameter, for example:

```sh
curl http://localhost:8080/?title=chicago+API:+chicago-style+title+capitalization
```

Output:

```text
Chicago API: Chicago-Style Title Capitalization
```
