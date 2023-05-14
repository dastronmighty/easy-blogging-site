import { Request, Response } from 'express';
import connection from '../../db';
import { QueryError, RowDataPacket } from 'mysql2';

export const updatePost = (req: Request, res: Response): void => {
    const { title, content } = req.body;
    const { id } = req.params;
    const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    connection.query(query, 
        [title, content, id], 
        (err: QueryError | null, result: RowDataPacket[]) => {
            if (err) throw err;
            res.send('Post updated successfully');
        }
    );
};