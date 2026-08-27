import { createApp } from "./app.js";

const port = Number(process.env.PORT ?? 8787);
createApp().listen(port, () => {
  console.log(`小伊和月亮的共读小窝 MCP server: http://localhost:${port}/mcp`);
});
