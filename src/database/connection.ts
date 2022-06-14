import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://postgres:postgres@localhost:11000/vrsoft_teste_melhorias");