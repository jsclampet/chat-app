CREATE DATABASE zenchat;

CREATE TABLE usernames(
  id SERIAL PRIMARY KEY, 
  username TEXT,
  password TEXT
);

CREATE TABLE messages(
  chat_id SERIAL PRIMARY KEY, 
  body TEXT
);`