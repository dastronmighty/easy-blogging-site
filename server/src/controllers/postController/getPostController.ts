import { Request, Response } from 'express';
import connection from '../../db';
import { QueryError, RowDataPacket } from 'mysql2';
import { Post } from '../../models/post';

export const getPosts = (req: Request, res: Response): void => {
    const query = 'SELECT * FROM posts';
    connection.query(query, 
      (err: QueryError | null, results: RowDataPacket[]) => {
        if (err) throw err;
        res.json(Post.fromRowDataPacketArray(results));
      }
    );
};
  
export const getPost = (req: Request, res: Response): void => {
    const { id } = req.params;
    const query = 'SELECT * FROM posts WHERE id = ?';
    connection.query(query, 
        [id], 
        (err: QueryError | null, results: RowDataPacket[]) => {
        if (err) throw err;
        res.json(Post.fromRowDataPacketArray(results));
        }
    );
};