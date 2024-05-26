import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // stripe aint a logged in user let it  access the webhook
  publicRoutes: ['/api/webhook'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};