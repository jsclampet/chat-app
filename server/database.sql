CREATE DATABASE zenchat;

CREATE TABLE messages(
  chat_id SERIAL PRIMARY KEY, 
  body TEXT
);