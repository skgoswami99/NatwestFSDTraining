## Authentication Server

On running `npm run server`, following APIs would be available for your use -
```
1. To register user - POST - http://localhost:9000/auth/register - expecting data - { firstname, lastname, city, age, email, password }
2. To authenticate user - POST - http://localhost:9000/auth/login - expecting data - { email, password }
3. To check if user is authenticated - POST - http://localhost:9000/auth/isAuthenticated - expecting header - { ‘Authorization’, Bearer ${token} }
```