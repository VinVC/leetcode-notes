function kmp(t, p) {
  let i = 0, j = 0
  const next = getNext2(p)
  console.log(next)
  while (i < t.length && j < p.length) {
    if (j === -1 || t[i] === p[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === p.length) {
    return i - j
  } else {
    return -1
  }
}

function getNext(p) {
  const next = [-1]
  let i = 0, j = -1
  while (i < p.length) {
    if (j === -1 || p[i] === p[j]) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
  return next
}

function getNext2(p) {
  const next = new Array(p.length)
  next.fill(-1)
  for (let i = 1; i < p.length; i++) {
    let j = next[i - 1]
    while (j !== -1 && p[j + 1] !== p[i]) {
      j = next[j]
    }
    if (p[j + 1] === p[i]) {
      next[i] = j + 1
    }
  }
  return next
}

// test 
const t = "ababababca"
const p = "abababca"

// console.log(kmp(t, p))
// console.log(getNext2(p))
const char = 'abababca'

const getPmt = s => {
  const next = new Array(p.length)
  next.fill(-1)
  for (let i = 1; i < p.length; i++) {
    let j = next[i - 1]
    while (j !== -1 && p[j + 1] !== p[i]) {
      j = next[j]
    }
    if (p[j + 1] === p[i]) {
      next[i] = j + 1
    }
  }
  return next
}
console.log(getPmt(char))