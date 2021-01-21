export const funcToSortNotes = (notes, sort) => {
  let sortedArray = notes.sort((a, b) => {
    if (sort === 'Newest') {
      return b.id - a.id
    }
  })

  return sortedArray
}

export const funcToSortByOldest = (notes, sort) => {
  let sortedArray = notes.sort((a, b) => {
    if (sort === 'Oldest') {
      return a.id - b.id
    }
  })
  return sortedArray
}
