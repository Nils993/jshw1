let dish = new Map();
dish.set("Маргарита", "Виктор");
dish.set("Пепперони", "Виктор");
dish.set("Филадельфия", "Ольга");
dish.set("Тирамису", "Дмитрий");
dish.set("Чизкейк", "Дмитрий");

const Client = [{ name: "Алексей" }, { name: "Мария" }, { name: "Ирина" }];
let client1 = new Map();
let client2 = new Map();
let client3 = new Map();
let order1 = new Set();
order1.add("Тирамису");
order1.add("Пепперони");
let order2 = new Set();
order2.add("Маргарита");
order2.add("Калифорния");
let order3 = new Set();
order3.add("Чизкейк");

client1.set(Client, order1);
client2.set(Client, order2);
client3.set(Client, order3);

console.log(`Филадельфия готовит повар: ${dish.get("Филадельфия")} `);
console.log(`Пепперони готовит повар: ${dish.get("Пепперони")} `);
console.log(`Чизкейк готовит повар: ${dish.get("Чизкейк")} `);
console.log(`Клиент ${Client[0].name} заказал: ${[...client1.get(Client)]}`);
console.log(`Клиент ${Client[1].name} заказала: ${[...client2.get(Client)]}`);
console.log(`Клиент ${Client[2].name} заказала: ${[...client3.get(Client)]}`);
