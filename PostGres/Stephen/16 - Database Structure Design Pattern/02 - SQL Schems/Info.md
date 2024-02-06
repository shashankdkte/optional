ondras.zarovi
Config based Schema Designer

dbdiagram.io

```sql
Table users {
  id SERIAL [pk increment],
  username VARCHAR(20)
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
}

Table POSTS {
  id SERIAL [pk increment],
  url VARCHAR(200)
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id INTEGER [ref: > users.id],
}

Table comments {
  id SERIAL [pk increment],
  content VARCHAR(240)
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id INTEGER [ref: > users.id],
  post_id INTEGER [ref: > posts.id],
}

```