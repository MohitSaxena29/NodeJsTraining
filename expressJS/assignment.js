// const express = require('express');
// const app = express();
// const port = 3800;

// const fs = require('fs');
// const path = require('path');

// // Middleware to parse JSON data
// app.use(express.json());

// // Read user data from data.json
// const dataPath = path.join(__dirname, 'data.json');
// let users = [];

// fs.readFile(dataPath, 'utf8', (err, data) => {

//     users = JSON.parse(data);
// });

// // Serve static files
// app.use(express.static('public'));

// // GET all users
// app.get('/users', (req, res) => {
//   const userHTML = users.map((user) => `
//     <div class="user-container">
//       <span style="font-weight: bold;">Name: </span> ${user.name} ,
//       <span style="font-weight: bold;">Email:  </span> ${user.email}
//     </div>
//   `).join('');

//   res.send(userHTML);
// });

// // GET a specific user
// app.get('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find((user) => user.id === userId);

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });


// // CREATE a new user
// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     newUser.id = users.length + 1;
//     users.push(newUser);
  
//     fs.writeFile(dataPath, JSON.stringify(users), 'utf8', (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Failed to create user' });
//       } else {
//         res.status(201).json(newUser);
//       }
//     });
//   });
  
// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });







// const express = require('express');
// const app = express();
// const port = 3800;

// const fs = require('fs');
// const path = require('path');

// // Middleware to parse JSON data
// app.use(express.json());

// // Read user data from data.json
// const dataPath = path.join(__dirname, 'data.json');
// let users = [];

// fs.readFile(dataPath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     users = JSON.parse(data);

//     // Serve static files
//     app.use(express.static('public'));

//     // GET all users
//     app.get('/users', (req, res) => {
//       const userHTML = users
//         .map(
//           (user) => `
//           <div class="user-container">
//             <span style="font-weight: bold;">Name: </span> ${user.name},
//             <span style="font-weight: bold;">Email: </span> ${user.email}
//           </div>
//         `
//         )
//         .join('');

//       res.send(userHTML);
//     });

//     // GET a specific user
//     app.get('/users/:id', (req, res) => {
//       const userId = parseInt(req.params.id);
//       const user = users.find((user) => user.id === userId);

//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     });

//     // CREATE a new user
//     app.post('/users', (req, res) => {
//       const newUser = req.body;
//       newUser.id = users.length + 1;
//       users.push(newUser);

//       fs.writeFile(dataPath, JSON.stringify(users), 'utf8', (err) => {
//         if (err) {
//           console.error(err);
//           res.status(500).json({ message: 'Failed to create user' });
//         } else {
//           res.status(201).json(newUser);
//         }
//       });
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     });
//   }
// });



const express = require('express');
const app = express();
const port = 3800;

const fs = require('fs');
const path = require('path');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Read user data from data.json
const dataPath = path.join(__dirname, 'data.json');
let users = [];

fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    users = JSON.parse(data);

    // Serve static files
    app.use(express.static('public'));

    // GET all users
    app.get('/users', (req, res) => {
      const userHTML = users
        .map(
          (user) => `
          <div class="user-container">
            <span style="font-weight: bold;">Name: </span> ${user.name},
            <span style="font-weight: bold;">Email: </span> ${user.email}
          </div>
        `
        )
        .join('');

      res.send(userHTML);
    });

    // GET a specific user
    app.get('/users/:id', (req, res) => {
      const userId = parseInt(req.params.id);
      const user = users.find((user) => user.id === userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    });

    // CREATE a new user
    app.post('/users', (req, res) => {
      const { name, email } = req.body;

      if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' });
      } else {
        const newUser = {
          id: users.length + 1,
          name,
          email
        };

        users.push(newUser);

        fs.writeFile(dataPath, JSON.stringify(users), 'utf8', (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Failed to create user' });
          } else {
            // Update the user list HTML
            const userHTML = users
              .map(
                (user) => `
                <div class="user-container">
                  <span style="font-weight: bold;">Name: </span> ${user.name},
                  <span style="font-weight: bold;">Email: </span> ${user.email}
                </div>
              `
              )
              .join('');

            // Send the updated user list HTML as the response
            res.status(201).send(userHTML);
          }
        });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
});
