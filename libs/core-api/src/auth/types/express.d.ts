// libs/core-api/src/auth/types/express.d.ts
export {};

declare global {
  namespace Express {
    interface Request {
      user?: {
        uid: string;
        email?: string;
        accountId: string;
        partyId: string;
        roles: string[];
      };
    }
  }
}
