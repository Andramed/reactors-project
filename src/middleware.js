import { withAuth } from "next-auth/middleware"

export default withAuth({
	secret: process.env.NEXT_AUTH_SECRET
})

export const config = { matcher: ["/profile"] }