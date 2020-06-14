import { serve } from "https://deno.land/std/http/server.ts";

const servidor = serve({port: 8080});
console.log("server listening");
for await (const req of servidor){
    req.respond({body: "hello gerar"});
}
//comando para correrlo:
/*
deno run --unstable --allow-read --allow-net 
server.ts
*/

*/ 