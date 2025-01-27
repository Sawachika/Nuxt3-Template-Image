interface Image {
  id?: number
  author?: string
  description?: string
  src?: string
}
interface State {
  image: Image
  lists: Image[]
}

export const useImageStore = defineStore('Image', {
  state: (): State => ({
    image: {},
    lists: [],
  }),
  actions: {
    getLists() {
      this.lists = Array.from({ length: 9 }, (_, index) => mockData(index))
    },
    loadMore() {
      const index = this.lists.length
      if (index > 20) return
      this.lists = [...this.lists, mockData(index), mockData(index + 1), mockData(index + 2)]
    }
  }
})

function mockData(index: number) {
  return {
    id: index,
    author: `Author ${index}`,
    description: `Description ${index}`,
    src: `/image/${~~(Math.random() * 3) + 1}.jpg`
  }
}