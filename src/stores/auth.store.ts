import { create } from 'zustand'

export type AuthModalView =
  | 'onboarding'
  | 'sign-in'
  | 'sign-up'
  | 'forgot-password'

interface Values {
  loggedIn: boolean
  isOpenModal: boolean
  view: AuthModalView
}

interface Actions {
  login: () => void
  logout: () => void
  openModal: (type?: AuthModalView) => void
  closeModal: () => void
  setOpenModal: (open: boolean) => void
  setModalView: (type: AuthModalView) => void
}

export const useAuthStore = create<Values & Actions>((set) => ({
  loggedIn: false,
  isOpenModal: false,
  view: 'onboarding',
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
  openModal: (view) => {
    set({ isOpenModal: true, view: view ?? 'onboarding' })
  },
  closeModal: () => set({ isOpenModal: false }),
  setOpenModal: (open) => set({ isOpenModal: open }),
  setModalView: (view) => set({ view: view })
}))
