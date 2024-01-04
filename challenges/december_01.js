function findFirstRepeated(gifts) {
    const rep = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
    return rep.length ? rep[0] : -1;
}