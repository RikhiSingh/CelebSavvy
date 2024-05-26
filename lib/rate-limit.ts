import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export async function rateLimit(identifier: string) {
    const rateLimit = new Ratelimit({
        redis: Redis.fromEnv(),
        // 10 requests within 10 seconds else block
        limiter: Ratelimit.slidingWindow(10, "10 s"),
        analytics: true,
        prefix: "@upstash/ratelimit"
    });

    return await rateLimit.limit(identifier);
};