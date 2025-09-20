import { serve } from "bun";

let contacts = [];

const server = serve({
    fetch(req) {
        const url = new URL(req.url);

        if (req.method === "GET" && url.pathname === "/") {
            return new Response(Bun.file("frontend.html"), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (req.method === "GET" && url.pathname === "/api/contacts/") {
            return new Response(JSON.stringify(contacts), {
                headers: { "Content-Type": "application/json" }
            });
        }

        if (req.method === "POST" && url.pathname === "/api/contacts/") {
            return req.json().then(data => {
                const id = contacts.length + 1;
                const contact = {id, ...data};
                contacts.push(contact);
                return new Response(JSON.stringify(contact), {
                headers: { "Content-Type": "application/json" }
                });
            });
        }

        return new Response("Not Found", { status: 404 });
    }, 
    port: 3000
})

console.log("Bun server running on http://localhost:3000");