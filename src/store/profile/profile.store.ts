import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProfileType } from "./profile.type";
import { definedStore } from "helpers";

type UseProfileStoreType = {
  user: ProfileType | null;
  onUpdateUser: (user: ProfileType) => ProfileType;
  onRemoveUser: () => void;
};

const useProfileStore = create<UseProfileStoreType>()(
  devtools(
    (set) => ({
      user: null,
      onUpdateUser: (user) => {
        set({ user }, false, "onUpdateUser");
        return user;
      },
      onRemoveUser: () => {
        set({ user: null }, false, "onRemoveUser");
      },
    }),
    definedStore("useProfileStore"),
  ),
);

export default useProfileStore;