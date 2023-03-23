export const useUserStore = defineStore('User', {
  state: () => ({ isOver18: false }),
  actions: {
    check() { this.isOver18 = true }
  }
})