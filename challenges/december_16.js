function transformTree(tree) {
    function generateTree(index) {
        if (tree[index] == null) return null;
        return {
            value: tree[index],
            left: generateTree(index*2+1),
            right: generateTree(index*2+2), 
        };
    }

    const result = generateTree(0);
    return result;
}

console.log(`Result con [3, 1, 0, 8, 12, null, 1]:`, transformTree([3, 1, 0, 8, 12, null, 1]));