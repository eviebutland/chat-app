const server = Bun.serve({
    port: 3000,
    fetch() {
      return new Response("Bun!");
    },
  });

console.log(Bun.version);
console.log(`Listening on http://localhost:${server.port} ...`);