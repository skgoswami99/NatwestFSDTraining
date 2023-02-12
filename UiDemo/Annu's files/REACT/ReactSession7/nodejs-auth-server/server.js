const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
let userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '5h'

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

function isEmailExists(email) {
  userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
  return userdb.users.findIndex(user => user.email === email) !== -1
}

function getUserData(emailAddress) {
  userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
  let { firstname, lastname, email, city, age } = userdb.users.find(user => user.email == emailAddress);
  return { firstname, lastname, email, city, age };
}

// Register New User
server.post('/auth/register', (req, res) => {
  const { firstname, lastname, city, age, email, password } = req.body;
  if (isEmailExists(email) === true) {
    const status = 409;
    const message = 'User with email address already exists';
    res.status(status).json({ status, message });
    return
  }
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id;
    if (data.users[data.users.length - 1] === undefined) {
      last_item_id = 0;
    } else {
      last_item_id = data.users[data.users.length - 1].id;
    }

    //Add new user
    data.users.push({ id: last_item_id + 1, firstname: firstname, lastname: lastname, city: city, age: age, email: email, password: password }); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message }).end();
        return
      }
    });
  });
  res.status(200).json({ status: 200, message: "User registered successfully" });
})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }
  const access_token = createToken({ email, password })
  getUserData(email);
  res.status(200).json({ status: 200, access_token, userData: getUserData(email) })
});

server.post('/auth/isAuthenticated', (req, res) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token is invalid'
      res.status(status).json({ status, isAuthenticated: false, message });
      return
    } else {
      res.status(200).json({ status: 200, isAuthenticated: true });
    }
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({ status, message })
  }
});

server.listen(9000, () => {
  console.log('Auth Server is Running on Port 9000...');
})
