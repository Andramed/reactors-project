import { authConfig } from '@/app/configs/auth';
import { default as NextAuth } from 'next-auth/next';

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }