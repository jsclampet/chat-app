# Up next ...
- Most authentication to backend
- Maybe break up validation and authentication
  - Authenticate only if validation === true
  - Send success response or err with specific messages
    - status code, error/response message? 


____________________
____________________

## UI for sign-in
  - Log In
    - Figure out Authentication/Authorization
  - Sign Up
    - How to store username/password information

1. UI 
2. Registration >>> Storing Username and password
3. Log In >>> Compare data vs what is stored

- Connect database (psql, SQL, Postgres)
- Learn WebSockets
- Learn JWT

____________________
## Extra

- Responsive code 
  - Make it look nice for mobile ??? 
    - @ 945px ??? 
    - Max Width for Home page?
____________________

Tech Stack
- React
- TypeScript
- BootStrap
- React Router
- dotenv
- NodeJS
- Express

Libraries
-node-pg
-express
-react-hook-form
-axios

__________________________

# SIGN-ON Authentication
Maybe have a few stops
1. Form validation
2. API call
3. Node server sends SQL command to database
4. Node server does the following
   1. Checks if username exists in table
   2. Checks if password in username row
5. Allows sign-in