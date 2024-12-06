import { serve } from "https://deno.land/std@0.199.0/http/server.ts";
import { registerUser } from "./routes/register.js";


// Serve static files
async function serveStaticFile(path, contentType) {
    try {
        const data = await Deno.readFile(path);
        return new Response(data, {
            headers: { "Content-Type": contentType },
        });
    } catch {
        return new Response("File not found", { status: 404 });
    }
}

// Handle incoming requests
async function handler(req) {
    const url = new URL(req.url);

    // Route: Serve static files
    if (url.pathname.startsWith("/static/")) {
        const filePath = `.${url.pathname}`;
        const contentType = getContentType(filePath);
        return await serveStaticFile(filePath, contentType);
    }



    // Route: Registration page
    if (url.pathname === "/register" && req.method === "GET") {
        return await serveStaticFile("./views/register.html", "text/html");
    }

    // Route: Handle user registration
    if (url.pathname === "/register" && req.method === "POST") {
        const formData = await req.formData();
        return await registerUser(formData);
    }

    // Default response for unknown routes
    return new Response("Not Found", { status: 404 });
}

// Utility: Get content type for static files
function getContentType(filePath) {
    const ext = filePath.split(".").pop();
    const mimeTypes = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        svg: "image/svg+xml",
        json: "application/json",
    };
    return mimeTypes[ext] || "application/octet-stream";
}


serve(handler, { port: 8000 });

// Run: deno run --allow-net --allow-env --allow-read --watch app.js