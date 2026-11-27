const toolName = process.argv[2] ?? 'unknown';
const status = process.argv[3] ?? 'ok';

console.log(
  JSON.stringify({
    event: 'post_tool_use',
    tool: toolName,
    status,
    timestamp: new Date().toISOString(),
  }),
);
