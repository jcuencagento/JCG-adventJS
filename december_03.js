function findNaughtyStep(original, modified) {
    const set_steps = new Set(original.split(''));
    modified.split('').forEach(char =>
        set_steps.delete(char) || set_steps.add(char)
    );
  
    return [...set_steps][0] ?? '';
}