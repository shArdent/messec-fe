import { create } from "zustand";

interface CurrentProfileState {
  email: string;
  username?: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useCurrentProfileStore = create<CurrentProfileState>()((set) => ({
  email: "",
  username: "",
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  setEmail: (newEmail) => set(() => ({ email: newEmail })),
}));
