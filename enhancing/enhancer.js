module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const test = {
  name: 'sword', 
  enhancement: 6,
  durability: 80
}

function succeed(item) {
  if (item.enhancement === 20) {
    return item
  } else if(item.enhancement < 20) {
    item.enhancement = item.enhancement + 1
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability < 5 ? item.durability = item.durability - item.durability : item.durability = item.durability - 5;
  } else if (item.enhancement >= 15 && item.enhancement <= 16){
    item.durability > 10 ? item.durability = item.durability - 10 : item.durability = item.durability - item.durability
  } else if (item.enhancement > 16) {
    (item.enhancement = item.enhancement - 1) && (item.durability > 10 ? item.durability = item.durability - 10 : item.durability = item.durability - item.durability)
  }
  return { ...item };
}

function repair(item) {
  if (item.durability < 100) {
    item.durability = 100 
  }
  return {...item}
}

function get(item) {
  return { ...item };
}
