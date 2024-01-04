function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (const val of intervals) {
      const [start, end] = val;
      const max = result[result.length - 1][1];
      start > max
        ? result.push(val)
        : (result[result.length - 1][1] = Math.max(end, max));
    }
  
    return result;
}

console.log('Result con [[1, 15], [8, 12], [4, 7]]:',  optimizeIntervals([[1, 15], [8, 12], [4, 7]]));