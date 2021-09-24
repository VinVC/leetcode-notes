function random() {
  return Math.floor(Math.random() * 6) + 1
}

function findTop2(data, begin, end) {
  const ans = []
  // 每次进来先摇一次
  for (let i = begin; i <= end; i++) {
    data[i].score += random()
  }
  data.sort((a, b) => b.score - a.score)
  let first = 0,
    second = 1
  for (let i = 2; i < data.length; i++) {
    if (data[i].score < data[second].score) break
    second = i
  }
  if (second - first === 1) {
    ans.push(data[first], data[second])
    data[first] = { ...data[first], score: 0 }
    data[second] = { ...data[second], score: 0 }
    return ans
  }
  if (data[first].score === data[second].score) {
    return findTop2(data, first, second)
  } else {
    // console.log(first, data[first])
    for (let i = first; i <= second; i++) {
      console.log(i, data[i])
    }
    data[first].score = Number.MAX_SAFE_INTEGER
    return findTop2(data, first, second)
  }
}

//test
const data = [
  { id: 0, score: 0 },
  { id: 1, score: 0 },
  { id: 2, score: 0 },
  { id: 3, score: 0 },
  { id: 4, score: 0 },
  { id: 5, score: 0 },
  { id: 6, score: 0 },
  { id: 7, score: 0 },
  { id: 8, score: 0 },
  { id: 9, score: 0 },
  { id: 10, score: 0 },
  { id: 11, score: 0 },
]

for (let i = 0; i < 10; i++) {
  console.log(`第${i + 1}次`, findTop2(data, 0, data.length - 1))
  // console.log(data)
  console.log(
    '----------------------------------------------------------------------------'
  )
}
