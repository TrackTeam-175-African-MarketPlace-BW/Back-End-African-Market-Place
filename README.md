# Back-End-African-Market-Place

📝 DEPLOYED ENDPOINTS:

✔️ **Front End**:
https://african-market-place-tt-175-buildweek.vercel.app/

✔️ **Back end**:
https://ialkamal-be-amp.herokuapp.com/

📝 REPOS:

✔️ **Front End**: [https://github.com/TrackTeam-175-African-MarketPlace-BW/Front-End-African-Market-Place](https://github.com/TrackTeam-175-African-MarketPlace-BW/Front-End-African-Market-Place)

✔️ **Back End**: [https://github.com/TrackTeam-175-African-MarketPlace-BW/Back-End-African-Market-Place](https://github.com/TrackTeam-175-African-MarketPlace-BW/Back-End-African-Market-Place)

## API Sanity Check

- **GET "/"**

REQUEST: `N/A`

RESPONSE: `{"api": "up"}`

---

## Users Endpoints

### - **GET "/api/users"**

REQUEST:`N/A`

RESPONSE: `{"users": "endpoint up"}`

<em>List of users [discontinued]</em>

### - **GET "/api/users/:id"** [RESTRICTED]

EXAMPLE: "/api/users/1"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

```
{
    "id": 1,
    "email": "ismail@gmail.com",
    "name": "Ismail AlKamal",
    "user_info": "Best seller in the country.",
    "user_photo": "https://ca.slack-edge.com/ESZCHB482-W015HRAH83G-46d85de735e1-512",
    "country": "Rwanda"
}
```

🧮 Notes:
A logged in user can't view the profile details of another user.

### - **POST "/api/users/register"**

REQUEST:

```
{
    "email": "zucks@facebook.com", /* required */
    "password": "alex", /* required */
    "country": "Kenya", /* required */
    "name": "Mark Zuckerberg", /* optional */
    "user_info": "Owner of Facebook", /* optional */
    "user_photo": "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg" /* optional */
}
```

RESPONSE:

```
{
    "id": 16,
    "email": "zucks@facebook.com",
    "name": "Mark Zuckerberg",
    "user_info": "Owner of Facebook",
    "user_photo": "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
    "country": "Kenya"
}
```

### - **POST "/api/users/login"**

REQUEST:

```
{
    "email":"ismail@gmail.com",
    "password":"ismail"
}
```

RESPONSE:

```
{
    "message": "login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaXNtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTYxNDU3MTcxMywiZXhwIjoxNjE0NTc1MzEzfQ.SOjoyQqvs4Df4DVA1X_Q6C6ERht9O9IM4Fz94sPoXyg",
    "user": {
        "id": 1,
        "name": "Ismail AlKamal",
        "email": "ismail@gmail.com"
    }
}
```

### - **PUT "/api/users/:id/password** [RESTRICTED]

EXAMPLE: "/api/users/16/password"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}

body: {
    "oldPassword": "alex", /* required */
    "newPassword": "mark", /* required */
}
```

RESPONSE:

```
{
    "message": "password changed successfully."
}
```

🧮 Notes:
A logged in user can't change a password for another user.

### - **PUT "/api/users/:id/profile** [RESTRICTED]

EXAMPLE: "/api/users/16/profile"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}

body: {
    "email": "thezucks@facebook.com",
    "name": "Mark Zuckerberg 1st",
    "user_info": "Owner of Facebook for now",
    "user_photo": "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
    "country": "Rwanda"
}
```

RESPONSE:

```
{
    "id": 16,
    "email": "thezucks@facebook.com",
    "name": "Mark Zuckerberg 1st",
    "user_info": "Owner of Facebook for now",
    "user_photo": "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
    "country": "Rwanda"
}
```

🧮 Notes:

1. A logged in user can't change the profile for another user.
2. If you changed the email, you have to login in again.

### - **GET "/api/users/:id/items"** [RESTRICTED]

EXAMPLE: "/api/users/3/items"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

```
[
  {
    "id": 4,
    "name": "Imported Rice",
    "description": "Best rice in the markets",
    "price": 4.35,
    "category": "Cereals - Rice",
    "market": "kakamega",
    "country": "Rwanda",
    "owner": "Sarah Rose",
    "owner_email": "sarah@gmail.com"
  },
  {
    "id": 5,
    "name": "Oranges",
    "description": "Best oranges in the markets",
    "price": 3.1,
    "category": "Fruits",
    "market": "Embu",
    "country": "Uganda",
    "owner": "Sarah Rose",
    "owner_email": "sarah@gmail.com"
  }
]
```

### - **POST "/api/users/:id/items"** [RESTRICTED]

EXAMPLE: "/api/users/16/items"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}

body: {
    "name": "Lettuce", /* required */
    "description": "Best lettuce in the markets", /* optional */
    "price": 4.25, /* optional */
    "category": "Vegetables", /* required */
    "market": "Loitoktok", /* required */
    "country": "Tanzania" /* required */
}
```

RESPONSE:

```
{
    "id": 11,
    "name": "Lettuce",
    "description": "Best lettuce in the markets",
    "price": 4.25,
    "category": "Vegetables",
    "market": "Loitoktok",
    "country": "Tanzania",
    "owner": "Mark Zuckerberg",
    "owner_email": "zucks@facebook.com"
}
```

🧮 Notes:
A logged in user can't add an item for another user.

### - **GET "/api/users/:id/items/:itemId"** [RESTRICTED]

EXAMPLE: "/api/users/2/items/2"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

```
{
    "id": 2,
    "name": "Beef",
    "description": "Best Beef in the markets",
    "price": 50,
    "category": "Animal Products",
    "market": "Garisa",
    "country": "Tanzania",
    "owner": "Chad Diaz",
    "owner_email": "chad@gmail.com"
}
```

### - **DELETE "/api/users/:id/items/:itemId"** [RESTRICTED]

EXAMPLE: "/api/users/16/items/9"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

`N/A`

```
Response status: 204 (upon successful delete)
```

🧮 Notes:
A logged in user can't delete an item for another user.

### - **PUT "/api/users/:id/items/:itemId"** [RESTRICTED]

EXAMPLE: "/api/users/16/items/7"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}

body: {
    "name": "Kiwi", /* required */
    "description": "Best kiwi in the markets", /* optional */
    "price": 13, /* optional */
    "category": "Fruits", /* required */
    "market": "Embu", /* required */
    "country": "Uganda" /* required */
}
```

RESPONSE:

```
{
    "id": 7,
    "name": "Kiwi",
    "description": "Best kiwi in the markets",
    "price": 13,
    "category": "Fruits",
    "market": "Embu",
    "country": "Uganda",
    "owner": "Mark Zuckerberg",
    "owner_email": "zucks@facebook.com"
}
```

🧮 Notes:
A logged in user can't edit an item for another user.

---

## Items Endpoints

### - **GET "/api/items"** [RESTRICTED]

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

```
[
    {
        "id": 1,
        "name": "Eggs",
        "description": "Best Eggs in the markets",
        "price": 25.5,
        "category": "Animal Products",
        "market": "Bungoma",
        "country": "Kenya",
        "owner": "Ismail AlKamal",
        "owner_email": "ismail@gmail.com"
    },
    {
        "id": 2,
        "name": "Beef",
        "description": "Best Beef in the markets",
        "price": 50,
        "category": "Animal Products",
        "market": "Garisa",
        "country": "Tanzania",
        "owner": "Chad Diaz",
        "owner_email": "chad@gmail.com"
    },
    {
        "id": 3,
        "name": "Soya Beans",
        "description": "Best beans in the markets",
        "price": 25.5,
        "category": "Beans",
        "market": "Busia",
        "country": "Kenya",
        "owner": "Chad Diaz",
        "owner_email": "chad@gmail.com"
    },
    ...
]
```

### - **GET "/api/items/:itemId"** [RESTRICTED]

EXAMPLE: "/api/items/3"

REQUEST:

```
headers: {
    authorization: "Bearer insert_token_here"
}
```

RESPONSE:

```
{
    "id": 3,
    "name": "Soya Beans",
    "description": "Best beans in the markets",
    "price": 25.5,
    "category": "Beans",
    "market": "Busia",
    "country": "Kenya",
    "owner": "Chad Diaz",
    "owner_email": "chad@gmail.com"
},
```

---

## Helpers Endpoints

### - **GET "/api/countries"**

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 1,
        "country": "Kenya"
    },
    {
        "id": 2,
        "country": "Uganda"
    },
    {
        "id": 3,
        "country": "Tanzania"
    },
    {
        "id": 4,
        "country": "Rwanda"
    },
    {
        "id": 5,
        "country": "South Sudan"
    }
]
```

### - **GET "/api/categories"**

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 1,
        "category": "Animal Products"
    },
    {
        "id": 2,
        "category": "Beans"
    },
    {
        "id": 3,
        "category": "Cereals - Maize"
    },
    {
        "id": 4,
        "category": "Cereals - Other"
    },
    {
        "id": 5,
        "category": "Cereals - Rice"
    },
     ...
]
```

### - **GET "/api/markets"**

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 1,
        "market": "Bungoma",
        "country": "Kenya"
    },
    {
        "id": 2,
        "market": "Busia",
        "country": "Kenya"
    },
    {
        "id": 3,
        "market": "Eldoret",
        "country": "Uganda"
    },
    {
        "id": 4,
        "market": "Embu",
        "country": "Uganda"
    },
    {
        "id": 5,
        "market": "Garisa",
        "country": "Tanzania"
    },
     ...
]
```

### - **GET "/api/markets?country=INSERT_COUNTRY_NAME"**

EXAMPLE: "/api/markets?country=Rwanda"

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 7,
        "market": "Kajiado",
        "country": "Rwanda"
    },
    {
        "id": 8,
        "market": "kakamega",
        "country": "Rwanda"
    }
]
```
