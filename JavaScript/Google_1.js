/*

Write a function that takes two Strings, s1 and s2 and return the longest
common sequence of s1 and s2


"ABAZDC", "BACBAD" ==> "ABAD"
"AGGTAB", "GXTXAYB" ==> "GTAB"

"aaaa", "aa" ==> "aa"


*/

// function longSeq(s1, s2){

// 	// console.log('Hello Ashutosh');
// 	const results = [...s1].map()

// }


const findFirstSequence = (s1, s2) => {
  let subsequence = ""

  let s1Idx = 0
  let s2Idx = 0

  for (; s1Idx < s1.length; ++s1Idx) {
    const s1Char = s1[s1Idx]
    for (let j = s2Idx; j < s2.length; ++j, ++s2Idx) {
      const s2Char = s2[j]
      if (s1Char === s2Char) {
        subsequence += s1Char
          ++s2Idx
        break
      }
    }
  }
  return subsequence
}

const removeDistinctChars = (s1, s2) => s1.split("").filter(c => s2.includes(c)).join("")
const removeDuplicates = (arr) => Array.from(new Set(arr))

const findAllSubsequences = (s1, s2) => {
  const s1NoDistinct = removeDistinctChars(s1, s2)
  const s2NoDistinct = removeDistinctChars(s2, s1)

  let i = 0

  const sequences = []

  while (i < s1NoDistinct.length) {
    const sequence = findFirstSequence(s1NoDistinct.slice(i), s2NoDistinct)
    i += sequence.length
    sequences.push(sequence)
  }

  return sequences
}

const findLongestSubsequence = (s1, s2) => {
  const a = findAllSubsequences(s1, s2)
  const b = findAllSubsequences(s2, s1)

  console.log('candidates:', [...a, ...b])

  return removeDuplicates([...a, ...b].sort((s1, s2) => s2.length - s1.length).filter((el, idx, arr) => el.length ===
    arr[0].length))
}

const test = (s1, s2) => console.log(findLongestSubsequence(s1, s2))

test("ABAZDC", "BACBAD")
test("AGGTAB", "GXTXAYB")
test("ALSKJDHJASLDH", "HNGFLKSHRADSKLASDJ")
test("aaaa", "aa")
