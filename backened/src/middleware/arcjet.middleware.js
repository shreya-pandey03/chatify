import aj from "../lib/arcjet";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.inspect(req);
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ message: "Too many requests. Please try again later." });
      } else if (decision.reason.isBot()) {
        return res
          .status(403)
          .json({ message: "Access denied. Bot traffic is not allowed." });
      } else {
        return res.status(403).json({ message: "Access denied." });
      }
    }

    //check spoofed bot
    if (decision.result.some(isSpoofedBot)) {
      return res.status(403).json({
        error: "Spoofed bot detected",
        message: "Malicious bot detected. Access denied.",
      });
    }
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    next();
  }
};
