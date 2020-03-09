import * as http from "http"
import titleCase from "./chicago-title";
const port = 8080

const reqHandler = (req, res) => {
    console.log(req.url)
    res.writeHead(200, { "Content-Type": "text/html" });
    const requestURL = new URL(req.url, 'https://example.org/');
    let input = requestURL.searchParams.get('title')
    if (input) {
        let title = titleCase(input)
        return res.end(title + "\n")
    } else {
        console.error(`invalid request: ${input}`)
        return res.end("Invalid input. Please provide a title query parameter.\nTry: /?title=my+title\n")
    }
}

const server = http.createServer(reqHandler)

server.listen(port, () => {
    return console.log(`server is listening on ${port}`)
});
