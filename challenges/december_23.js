function organizeChristmasDinner(dishes) {
    const ingredients = {};
    for (const [dish, ...dishIngredients] of dishes) {
        for (const ingredient of dishIngredients) {
            if (ingredients[ingredient]) {
                ingredients[ingredient].push(dish);
            } else {
                ingredients[ingredient] = [dish];
            }
        }
    }
  
    const result = [];
  
    for (const ingredient in ingredients) {
        if (ingredients[ingredient].length > 1) {
            result.push([ingredient, ...ingredients[ingredient].sort()]);
        }
    }
  
    return result.sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(`Result with organizeChristmasDinner([
    ["gingerbread", "flour", "ginger", "sugar"],
    ["glazed ham", "ham", "honey", "sugar", "vinegar"],
    ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
    ["vegetable soup", "carrot", "potato", "onion", "garlic"],
    ["fruit punch", "apple juice", "orange juice", "sugar"]
  ])`, organizeChristmasDinner([
    ["gingerbread", "flour", "ginger", "sugar"],
    ["glazed ham", "ham", "honey", "sugar", "vinegar"],
    ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
    ["vegetable soup", "carrot", "potato", "onion", "garlic"],
    ["fruit punch", "apple juice", "orange juice", "sugar"]
  ]));