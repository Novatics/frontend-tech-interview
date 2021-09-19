// Refactor the following code
var users = [{ name: 'Lucas', score: 5 }, { name: 'Carlos', score: 3 }, { name: 'Ana', score: 7 }];

var approvedUsers = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].score >= 5) {
    approvedUsers.push(users[i]);
  }
}

var usersWithMessage = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].score >= 5) {
    usersWithMessage.push({ name: users[i].name, score: users[i].score, message: 'APPROVED' });
  } else {
    usersWithMessage.push({ name: users[i].name, score: users[i].score, message: 'FAILED' });
  }
}

// Print approved users
console.log('Approved users: ');
for (var i = 0; i < approvedUsers.length; i++) {
  console.log("Name: " + approvedUsers[i].name + ", Score: " + approvedUsers[i].score + ", Message: APPROVED");
}

// Print users with message
console.log('All users: ');
for (var i = 0; i < usersWithMessage.length; i++) {
  console.log("Name: " + usersWithMessage[i].name + ", Score: " + usersWithMessage[i].score + ", Message: " + usersWithMessage[i].message);
}