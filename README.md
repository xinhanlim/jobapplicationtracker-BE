# Job Application Tracker - Back End
Designed to track My Own Jobs Application and feel demoralised  
Start Date : 11/6/2025

## 11/6/2025 Journey

<details>
<summary>Summary</summary>

1. Things Done Today: 

- setting up express node js w/ mongodb
- connecting to mongodb
- CRUD for users collection 
- CUD for jobs collections, less READ

2. Yet To Do : 
- Add JWT for users, creating middleware and password bcrypt (not now, due to easier building of the rest of the portion)
- Adding reg exp to updating user and creating user (not now, due to easier building of the rest of the portion)

3. Do i Need ? :
- READ for user,

```js
// Do Remember 
argument handler must be a function 
module.exports = router  // [must be included in the route page.]
```

```js
Cannot destructure property 'email' of 'req.body' as it is undefined. 
app.use(express.json())  // this must be in the index.js to process json files.
```

```bash
Error Connecting To DataBase MongoServerSelectionError...record/rec_layer_s3.c:1605:SSL alert number 80
## Remember to edit Ip Address to allow access to anyone
```

</details>

## 12/6/2025 Journey
<details><summary>Summary</summary>

1. Things Done Today: 

- cRud , Read done for jobs. able to fetch jobs document based on userId.
- User able to login equipped with jwtoken and when user want to delete account,update -> it will require this token to be able to do so. if not return an 401 error.
- User CRUD completed.

2. Stuck at Jsonwebtoken, AuthMiddleware
- understanding jsonwebtoken
```js 
const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken (req, res, next) {

    //so authHeader here is to extract the Authorization information 
        const authHeader = req.headers['authorization'];
    // so if authorization is found, "Authorization: Bearer ABC123,"
    // use token as a variable to split it into the actual token from the authroization bearer.
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(403);
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded
            next();
        });
    };

module.exports = verifyToken;
```

- When i login and update, i refresh my password is not hashed anymore..  thus returning 
```bash
"Invalid Email or Password" ##Error in my REST CLIENT
## console.log results
req.body testing123
server user password testing123
bcrypt compare false
## the only thing i can predict is that, since after updating user info, password suppose to be hashed in the sever but it changes to look like the req.body thus  
## creating a new password in it's hashed form(testing123) which might equal to others password which is different from the sever side.
## so the problem is in the updateUser, it should have hashed the password in some weird long password instead of this.
```
- Solved it by adding bcrypt to hash password in the register and update user function
```js

async function updateUser({ _id, password, display_name }) {

    const hashedPassword = await bcrypt.hash(password, 10);
    const updateUser = await userDataLayer.updateUser({ _id, password:hashedPassword, display_name })
    return updateUser
}
```

</details>