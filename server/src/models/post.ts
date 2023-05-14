// src/models/post.ts
import { RowDataPacket } from 'mysql2';

export class Post {
  id: number;
  title: string;
  content: string;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static fromRowDataPacket(rowDataPacket: RowDataPacket): Post {
    return new Post(rowDataPacket.id, rowDataPacket.title, rowDataPacket.content);
  }

  static fromRowDataPacketArray(rowDataPacketArray: RowDataPacket[]): Post[] {
    return rowDataPacketArray.map(Post.fromRowDataPacket);
  }
}
