CREATE TABLE message (
    message_id      BIGSERIAL PRIMARY KEY
    conversation_id INT NOT NULL REFERENCES conversation
    sender          VARCHAR(300) NOT NULL
    message         text NOT NULL
)
