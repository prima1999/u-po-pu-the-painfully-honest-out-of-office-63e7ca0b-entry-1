import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One painfully honest out-of-office auto-reply.
// The sender is away, the inbox is a mountain, and Monday brings the reply.
const ENTRY =
  "I'm away this week, and your email joins hundreds of unread messages from people I respect, all waiting while I rest — please know my silence is recovery, not indifference, and I'll reply on Monday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
