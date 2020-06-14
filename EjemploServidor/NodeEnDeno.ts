import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 3000;
const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get('/api/user/{userId}', async (req, res)=>{
    await res.json({id: req.params.userId, name: 'Pepe',age:'33'});
});

const server = await app.listen(port);
console.log("server on port 3000");

//comando para correrlo:
/*
deno run --unstable --allow-read --allow-net 
NodeEnDeno.ts
*/