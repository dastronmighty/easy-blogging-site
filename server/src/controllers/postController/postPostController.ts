import { Request, Response } from 'express';
import connection from '../../db';
import { QueryError, RowDataPacket } from 'mysql2';

export const createPost = (req: Request, res: Response): void => {
    const { title, content } = req.body;
    const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    connection.query(
      query,
      [title, content],
      (err: QueryError | null, result: RowDataPacket[]) => {
        if (err) throw err;
        res.send('Post created successfully');
      }
    );
};  