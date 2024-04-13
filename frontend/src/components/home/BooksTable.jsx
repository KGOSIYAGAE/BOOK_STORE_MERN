import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export default function BooksTable({ books }) {
  return (
    <table className="w-full border-spacing-2">
      <thead>
        <tr className="bg-slate-200">
          <th className="border border-slate-600">No</th>
          <th className="border border-slate-600 ">Title</th>
          <th className="border border-slate-600 max-md:hidden">Author</th>
          <th className="border border-slate-600 max-md:hidden">Publish Year</th>
          <th className="border border-slate-600 ">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-600 text-center">{index + 1}</td>
            <td className="border border-slate-600 text-center">{book.title}</td>
            <td className="border border-slate-600 text-center  max-md:hidden">{book.author}</td>
            <td className="border border-slate-600 text-center  max-md:hidden">{book.publishYear}</td>
            <td className="border border-slate-600 text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2x1 text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2x1 text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2x1 text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
