import { exists, existsSync } from "https://deno.land/std/fs/mod.ts";
//import { exists, existsSync } from "https://deno.land/std/fs/mod.ts" ;
const res = await  exists("./archivo.txt");
console.log(res);
//comando para correrlo:
/*
deno run --unstable --allow-read 
app.ts
*/