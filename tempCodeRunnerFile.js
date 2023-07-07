const takeOrder = (customer, callback) => {
  console.log(`Take order for customer ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Processing order for customer ${customer}`);

  setTimeout(() => {
    console.log(`Cooking complete`);
    console.log(`Order processed for customer ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Completed order for customer ${customer}`);
};

takeOrder("Customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
