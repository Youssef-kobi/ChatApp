import React from 'react'

const groupSorting = (arr) => {
  console.log(arr)
  return arr.reduce((acc, cur) => {
    console.log(cur)
    console.log(acc)
    const firstLetter = cur.username[0].toLowerCase()
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] }
  }, {})
}

export default groupSorting
