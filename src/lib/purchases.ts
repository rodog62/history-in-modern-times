import { create } from "zustand";
import { persist } from "zustand/middleware";

type PurchaseState = {
  unlocked: string[];
  waitlist: { seriesId: string; email: string; at: string }[];
  inquiries: {
    name: string;
    email: string;
    topic: string;
    message: string;
    at: string;
  }[];
  unlock: (seriesId: string) => void;
  isUnlocked: (seriesId: string) => boolean;
  joinWaitlist: (seriesId: string, email: string) => void;
  addInquiry: (entry: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) => void;
};

export const usePurchases = create<PurchaseState>()(
  persist(
    (set, get) => ({
      unlocked: [],
      waitlist: [],
      inquiries: [],
      unlock: (seriesId) =>
        set((s) =>
          s.unlocked.includes(seriesId)
            ? s
            : { unlocked: [...s.unlocked, seriesId] },
        ),
      isUnlocked: (seriesId) => get().unlocked.includes(seriesId),
      joinWaitlist: (seriesId, email) =>
        set((s) => ({
          waitlist: [
            ...s.waitlist,
            { seriesId, email, at: new Date().toISOString() },
          ],
        })),
      addInquiry: (entry) =>
        set((s) => ({
          inquiries: [
            ...s.inquiries,
            { ...entry, at: new Date().toISOString() },
          ],
        })),
    }),
    { name: "hmt-prototype-purchases" },
  ),
);
