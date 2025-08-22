# 建表
先有表，后有数据
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  age INT,
  email VARCHAR(50) UNIQUE
)
```
# 增
```sql
INSERT INTO users(id, name)
VALUES
(1, 'test1'),
(2, 'test2'),
```
# 查
```sql
SELECT * FROM users
SELECT id,name FROM users
SELECT id,name FROM users WHERE name IS NOT NULL
SELECT id,age FROM users ORDER BY age DESC/ASC
SELECT * FROM users WHERE age > 18
SELECT * FROM users WHERE name = 'Alice'
SELECT * FROM users WHERE name LIKE 'A%' 扩展一下like
SELECT * FROM users LIMIT 5;
```
# 改
```sql
UPDATE users
SET name='Amy'
WHERE id=1
```
# 删
```sql
DELETE FROM user WHERE id=1
```