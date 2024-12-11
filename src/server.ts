import fastify from "fastify";

const app = fastify();

//GET, POST, PUT, DELETE, PATCH

app.get("/hello", () => {
    return "Hello World!"
})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server is running on port 3333");
});
