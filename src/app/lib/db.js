import { Pool } from 'pg';

const pool = new Pool({
    user: 'berlinuser',
    host: 'localhost',
    database: 'berlindb',
    password: 'berlinpassword',
    port: 5432,
});

export const query = (text, params) => pool.query(text, params);