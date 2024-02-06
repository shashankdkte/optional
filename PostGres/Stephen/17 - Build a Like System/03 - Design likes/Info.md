users    -> id , username
likes -> id , user_id , post_id
posts -> id, url

Add a UNIQUE constraint with UNIQUE(user_id,post_id)


#### likes of post with id 3
```sql
SELECT COUNT(*) FROM likes
WHERE post_id = 3
```

#### Id of top 5 most liked post
```sql
SELECT posts.id FROM posts
JOIN likes on likes.post_id = posts.id
GROUP BY posts.id
ORDER BY count(*) DESC
LIMIT 5
```

