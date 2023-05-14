ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS blog;
USE blog;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
);

INSERT INTO posts (title, content) VALUES 
('First Post', 'This is the content of the first post.'),
('Second Post', 'This is the content of the second post.'),
('Third Post', 'This is the content of the third post.');