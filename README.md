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

## Users Endpoint

- **GET "/api/users"** [TEMPORARY]

REQUEST:`N/A`

RESPONSE: `{ "users": "up" }`

- **GET "/api/users/:id"** [RESTRICTED]

REQUEST:
```
headers {
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
    "country_id": 4
}
```

🧮 Notes:
A logged in user can't view the profile details of another user.

- **POST "/api/users/register"**

REQUEST:

```
{
    "email": "alex@gmail.com",
    "password": "alex",
    "country": "Kenya"
}
```

RESPONSE:

```
{
    "id": 11,
    "email": "alex@gmail.com",
    "name": null,
    "user_info": null,
    "user_photo": null,
    "country_id": 1
}
```

- **POST "/api/users/login"**

REQUEST:

```
{
    "email": "alex@gmail.com",
    "password": "alex"
}
```

RESPONSE:

```
{
    "message": "login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxleEBnbWFpbC5jb20iLCJpYXQiOjE2MTQzMTI5NjgsImV4cCI6MTYxNDMxNjU2OH0.bhlMzlV3mLced9PgGwuX1_8V8Vr5C6Yq4HVmkdnWxgg"
}
```
---

## Items Endpoint

- **GET "/api/items"**

REQUEST:`N/A`

RESPONSE: `{ "items": "up" }`

---

## Helpers Endpoint

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