import datetime
import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def hello():
    conn = get_db_connection()
    demo = conn.execute('SELECT * FROM demo').fetchall()
    conn.close()
    return render_template(
        'index.html',
        utc_dt=datetime.datetime.utcnow(),
        demo=demo
    )