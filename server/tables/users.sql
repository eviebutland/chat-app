create table users (
	user_id BIGSERIAL PRIMARY KEY,
	password VARCHAR(50),
	email VARCHAR(50),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	created_on DATE
);

insert into users (password, email, first_name, last_name, created_on) values ('aL1&a?k&{4uI*\', 'gberceros0@reuters.com', 'Guglielmo', 'Berceros', '2023-06-12 21:34:56');
insert into users (password, email, first_name, last_name, created_on) values ('hO5(~tUo?', 'ffinnemore1@smh.com.au', 'Flin', 'Finnemore', '2023-08-04 16:02:00');
insert into users (password, email, first_name, last_name, created_on) values ('uL2!DI}D5+#', 'vthatcher2@ox.ac.uk', 'Vivyanne', 'Thatcher', '2023-09-15 09:37:06');
insert into users (password, email, first_name, last_name, created_on) values ('kY2`$KFBDvI}R"z', 'jcansdall3@webeden.co.uk', 'Joanne', 'Cansdall' '2023-08-03 08:49:01');
insert into users (password, email, first_name, last_name, created_on) values ('iD3~aECq=r@$/?@Z', 'mketteringham4@kickstarter.com', 'Maude', 'Ketteringham', '2023-07-02 12:27:44');
insert into users (password, email, first_name, last_name, created_on) values ('jJ3>#0"a/0J*lhd', 'wlessmare5@umn.edu', 'Win', 'Lessmare', '2023-07-10 02:24:59');
insert into users (password, email, first_name, last_name, created_on) values ('rT9!7''/OFMe', 'pbeatson6@instagram.com', 'Pietra', 'Beatson', '2023-03-15 07:52:38');
insert into users (password, email, first_name, last_name, created_on) values ('zR1?9f60Hp', 'ebeane7@meetup.com', 'Eduino', 'Beane', '2023-10-01 19:52:33');
insert into users (password, email, first_name, last_name, created_on) values ('qB5.#Na0A6u0W', 'rtemplman8@wordpress.org', 'Rutherford', 'Templman', '2023-11-30 07:52:20');
insert into users (password, email, first_name, last_name, created_on) values ('fH1&>D_8', 'lbeddis9@pcworld.com', 'Leoline', 'Beddis', '2023-03-31 00:06:42');


CREATE TABLE friends (
    requester_id BIGSERIAL REFERENCES users(user_id),
    adressee_id BIGSERIAL REFERENCES users(user_id) 
)
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 2);
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 3);
INSERT INTO friends (requester_id, adressee_id) VALUES (1, 4);

-- user 1 friends:
-- friend table, requester_id 1, adressee_id 2
-- friend table, requester_id 1, adressee_id 4
-- Then get all the friends table with requester_id === user_id 1