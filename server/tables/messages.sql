CREATE TABLE message (
    message_id      BIGSERIAL PRIMARY KEY,
    conversation_id BIGSERIAL NOT NULL REFERENCES conversations,
    sender          VARCHAR(300) NOT NULL,
    message         text NOT NULL
);
