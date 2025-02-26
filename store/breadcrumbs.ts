import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type State = {
  breadcrumbs: string[];
};

type Actions = {
  setBreadcrumbs: (paths: string[]) => void;
};

const useBreadcrubsStore = create<State & Actions>()(
  persist(
    (set) => ({
      breadcrumbs: [],
      setBreadcrumbs: (paths) => set({ breadcrumbs: paths }),
    }),
    {
      name: "breadcrumbs",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useBreadcrubsStore;
