CREATE TABLE conversations(
    conversation_id BIGSERIAL PRIMARY KEY,
    user_id1 BIGSERIAL NOT NULL REFERENCES users,
    user_id2 BIGSERIAL  NOT NULL REFERENCES users
);