import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"

import Link from "next/link";
import posts from "@/data/posts";

interface PostsTableProps {
  title?:string;
}

const PostTable = ({title}: PostsTableProps) => {

  return (
    <div className='mt-10'>
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : 'Posts'}
      </h3>
      <Table>
        <TableCaption>A list of posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead className="hidden md:table-cell text-right">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">{post.author}</TableCell>
              <TableCell className="text-right hidden md:table-cell">{post.date}</TableCell>
              <TableCell className='text-right'>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PostTable