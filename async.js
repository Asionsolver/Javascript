// const processOrder = (customer) => {
//   console.log(`Processing order for customer 1`);

//   setTimeout(() => {
//     console.log(`Cooking complete`);
//   }, 3000);

//   console.log(`Order processed for customer 1`);
// };

// console.log(`Take order for customer 1`);
// processOrder();
// console.log(`Completed order for customer 1`);

// Better way to do it

// const takeOrder = (customer, callback) => {
//   console.log(`Take order for customer ${customer}`);
//   callback(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`Processing order for customer ${customer}`);

//   setTimeout(() => {
//     console.log(`Cooking complete`);
//     console.log(`Order processed for customer ${customer}`);
//     callback(customer);
//   }, 3000);
// };

// const completeOrder = (customer) => {
//   console.log(`Completed order for customer ${customer}`);
// };

// takeOrder("Customer 1", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer);
//   });
// });

// Promises

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
}
);

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
}

// meeting
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(res);
//         }
//     )
//     .catch((err) => {
//         console.log(err.message);
//     }
//     );

meeting.
    then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    }
    ); 
