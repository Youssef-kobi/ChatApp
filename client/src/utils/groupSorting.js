import React from 'react'

const groupSorting = (arr) =>
  arr.reduce((acc, cur) => {
    const firstLetter = cur.username[0].toLowerCase()
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] }
  }, {})

export default groupSorting
