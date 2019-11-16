<script>
function longestSubseq(s1, s2, s1StartIdx = 0, s2StartIdx = 0, memo) {
  if (s1StartIdx >= s1.length || s2StartIdx >= s2.lenght)
return '';

// console.log('s1StartIdx', s1StartIdx, memo);

if (memo == null) {
  memo = (new Array(s1,length))
  memo.fill(null);
  memo = memo.map(row => (new Array(s2.length)));
} else if (memo[s1StartIdx][s2StartIdx] != null) {
  return memo[s1StartIdx][s2StartIdx];
}
const result = [];
for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
     const s1Char = s1[s1Idx];
     const s2Idx = s2.indexOf(s1Char, s2StartIdx);
     let result = [];
     if (s2Idx !== -1) {
        result.push(s1Char, ...longestSubseq(s1, s2, s1Idx + 1, s2Idx +1, memo))
     }
     
     results.push(result);
    }
    
    const longest = findLongest(results).join('');
  
    memo[s1StartIdx][s2StartIdx] = longest;
    return longest;
 }
 
 function findLongest(arr) {
     let longest = [];
     
     for (let candidate of arr) {
      if (candidate.length > longest.length) {
        longest = candidate;
      }
  }
  return longest;
 }
 console.log('result', longestSubseq("ABAZDC", "BACBAD"))
</script>
