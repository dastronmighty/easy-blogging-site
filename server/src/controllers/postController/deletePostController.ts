import { Request, Response } from 'express';
import connection from '../../db';
import { QueryError, RowDataPacket } from 'mysql2';

export const deletePost = (req: Request, res: Response): void => {
    const { id } = req.params;
    const query = 'DELETE FROM posts WHERE id = ?';
    connection.query(query, 
        [id], 
        (err: QueryError | null, result: RowDataPacket[]) => {
            if (err) throw err;
            res.send('Post deleted successfully');
        }
    );
};
