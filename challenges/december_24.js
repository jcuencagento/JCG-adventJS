function getStaircasePaths (steps, maxJump) {
    const paths = [];
    const path = [];
    const calculatePaths = (steps, maxJump, path) => {
        if (steps === 0) {
            paths.push(path);
            return;
        }
  
        for (let i = 1; i <= maxJump && i <= steps; i++) {
            calculatePaths(steps - i, maxJump, [...path, i]);
        }
    }
  
    calculatePaths(steps, maxJump, path);
    return paths;
}

console.log(`Result with getStaircasePaths(5, 2)`, getStaircasePaths(5, 2));