import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO demo (title, content) VALUES (?, ?)",
            ('First Demo', 'Content for the first demo')
            )

cur.execute("INSERT INTO demo (title, content) VALUES (?, ?)",
            ('Second Demo', 'Content for the second demo')
            )

connection.commit()
connection.close()
