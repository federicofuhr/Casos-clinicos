require("../connection");

const User = require("../models/User");

async function updateUsers() {
  const user = await User.update({username: 'jose'},{
    password: 'contraseniaSegura'
  });

  console.log(user)
}

updateUsers()