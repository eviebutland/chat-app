CREATE TABLE friends (
    requester_id BIGSERIAL REFERENCES users(user_id),
    adressee_id BIGSERIAL REFERENCES users(user_id) 
)
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 2);
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 3);
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 4);

