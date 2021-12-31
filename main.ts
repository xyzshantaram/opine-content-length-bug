import { opine, serveStatic } from "https://deno.land/x/opine@2.0.0/mod.ts";

const app = opine();
app.use(serveStatic("public"));

app.get('/', (req, res, next) => {
    res.send(`
    <html>
        <head>
            <title>Opine content-length problem demo</title>
            <link rel='stylesheet' href='style.css'>
        </head>
        <body>
            <img src='image.png'>
        </body>
    </html>
    `)

    next();
})

app.listen(3000, () => {
    console.log('listening on http://localhost:3000')
});
