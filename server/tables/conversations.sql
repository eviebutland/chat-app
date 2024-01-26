CREATE TABLE conversations(
    conversation_id BIGSERIAL PRIMARY KEY
    user_id1 NOT NULL REFERENCES users
    user_id2 NOT NULL REFERENCES users
)