export default function handler(req, res) {
  res.status(200).json({
    name: "My MCP Service",
    version: "2025-06-18",
    tools: ["chat", "crypto_analysis"],
    status: "working"
  });
}
