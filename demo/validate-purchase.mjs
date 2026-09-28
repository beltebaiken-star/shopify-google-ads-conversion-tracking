const event = {
  event: "purchase",
  ecommerce: {
    transaction_id: "DEMO-1001",
    value: 129.9,
    currency: "USD",
    items: [{ item_id: "SKU-DEMO-1", item_name: "Demo Product", price: 129.9, quantity: 1 }]
  }
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(event.event === "purchase", "Expected purchase event");
assert(event.ecommerce.transaction_id, "Missing transaction_id");
assert(Number.isFinite(event.ecommerce.value), "Purchase value must be numeric");
assert(/^[A-Z]{3}$/.test(event.ecommerce.currency), "Currency must be 3 uppercase letters");
assert(Array.isArray(event.ecommerce.items) && event.ecommerce.items.length > 0, "Items are required");

console.log("PASS: purchase payload is structurally valid");
console.log(JSON.stringify(event, null, 2));
