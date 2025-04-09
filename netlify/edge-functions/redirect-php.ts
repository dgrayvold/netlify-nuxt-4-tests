import type { Config, Context } from "@netlify/edge-functions";

export default (req: Request, ctx: Context) => {
    console.log(`\nEdge function run on path: ${ctx.url.pathname}\n`);

    return new Response(null, {
        status: 404,
        headers: {
            'netlify-cdn-cache-control': 'durable, immutable, max-age=31536000, public'
        },
    });
}

export const config: Config = { cache: 'manual', path: '/*.php' }