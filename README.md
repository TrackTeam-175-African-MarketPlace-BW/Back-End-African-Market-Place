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

- **GET "/api/users"** [TEMPORARY]

REQUEST:`N/A`

RESPONSE: List of users [admin privileges]

- **GET "/api/users/:id"** [RESTRICTED]

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

- **POST "/api/users/register"**

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

- **POST "/api/users/login"**

REQUEST:

```
{
    "email": "alex@lambda.com",
    "password": "alex"
}
```

RESPONSE:

```
{
    "message": "login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxleEBsYW1iZGEuY29tIiwiaWF0IjoxNjE0MzQxMjA5LCJleHAiOjE2MTQzNDQ4MDl9.Kpo_FQQ593r9_buGDiUA1jG5IWPDar18xKQ2aRXJAh0"
}
```

- **GET "/api/users/:id/items"** [RESTRICTED]

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
    "location": "Rwanda",
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
    "location": "Uganda",
    "owner": "Sarah Rose",
    "owner_email": "sarah@gmail.com"
  }
]
```

- **GET "/api/users/:id/items/:itemId"** [RESTRICTED]

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
    "location": "Tanzania",
    "owner": "Chad Diaz",
    "owner_email": "chad@gmail.com"
}
```

---

## Items Endpoints

- **GET "/api/items"** [RESTRICTED]

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
        "location": "Kenya",
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
        "location": "Tanzania",
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
        "location": "Kenya",
        "owner": "Chad Diaz",
        "owner_email": "chad@gmail.com"
    },
    ...
]
```

- **GET "/api/items/:itemId"** [RESTRICTED]

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
    "location": "Kenya",
    "owner": "Chad Diaz",
    "owner_email": "chad@gmail.com"
},
```

---

## Helpers Endpoints

- **GET "/api/countries"**

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

- **GET "/api/categories"**

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

- **GET "/api/markets"**

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 1,
        "market": "Bungoma",
        "location": "Kenya"
    },
    {
        "id": 2,
        "market": "Busia",
        "location": "Kenya"
    },
    {
        "id": 3,
        "market": "Eldoret",
        "location": "Uganda"
    },
    {
        "id": 4,
        "market": "Embu",
        "location": "Uganda"
    },
    {
        "id": 5,
        "market": "Garisa",
        "location": "Tanzania"
    },
     ...
]
```

- **GET "/api/markets?country=INSERT_COUNTRY_NAME"**

EXAMPLE: "/api/markets?country=Rwanda"

REQUEST:`N/A`

RESPONSE:

```
[
    {
        "id": 7,
        "market": "Kajiado",
        "location": "Rwanda"
    },
    {
        "id": 8,
        "market": "kakamega",
        "location": "Rwanda"
    }
]
```
