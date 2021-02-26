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

- **GET "/api/users/:id"**

REQUEST:`N/A`

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
    "password": "$2b$10$5X2TilanI/JOh0CCG9b.F.pJEXlOHaLNdB46LGhEh2a4AQhJo0Kgy",
    "name": null,
    "user_info": null,
    "user_photo": null,
    "country_id": 1
}
```

---

## Items Endpoint

- **GET "/api/items"**

REQUEST:`N/A`

RESPONSE: `{ "items": "up" }`
