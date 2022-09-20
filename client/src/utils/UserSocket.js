const users = []

// Join user to chat
export const userJoin = (id, username, room) => {
  const user = { id, username, room }
  users.push(user)
  return user
}

// Get current user
export const getCurrentUser = (id) => users.find((user) => user.id === id)

// User leaves chat
export const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
  return null
}

// Get room users
export const getRoomUsers = (room) => users.filter((user) => user.room === room)
