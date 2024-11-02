import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const currentBook = books.find((book) => book.bookId === parseInt(bookId));
    const { bookName, author, image, category, tags, review, rating, publisher, yearOfPublishing, totalPages } = currentBook
    return (
        <div className=" flex flex-col lg:flex-row gap-5 mt-10 mb-20">
            <div className="py-20 px-32 bg-gray-300 flex justify-center items-center ">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl " />
            </div>
            <div className="w-full">
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p className="py-3 text-xl font-semibold">Author : {author}</p>
                <hr className="border " />
                <p className="font-semibold my-3 text-xl" >{category}</p>
                <hr className="border mb-5" />
                <p className=""><span className="font-bold text-xl">Review :</span> {review}</p>
                <div className="flex flex-wrap gap-3 my-5 items-center">
                    <span className="font-bold text-xl">Tags : </span>
                    {
                        tags.map((tag, idx) =>
                            <button key={idx} className="btn btn-ghost bg-[rgba(35,190,10,0.05)] rounded-full text-[rgb(35,190,10)] text-base">{tag}</button>
                        )
                    }
                </div>
                <hr className="border mb-5" />
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                {/* <th>1</th> */}
                                <td className=" pl-0">Number of Pages : </td>
                                <td  className=" pl-0 font-bold">{totalPages}</td>
                             
                            </tr>
                            {/* row 2 */}
                            <tr>
                                {/* <th>2</th> */}
                                <td  className=" pl-0">Publisher : </td>
                                <td  className=" pl-0 font-bold">{publisher}</td>
                               
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td  className=" pl-0">Year of Publishing : </td>
                                <td  className=" pl-0 font-bold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                {/* <th>3</th> */}
                                <td  className=" pl-0">Rating : </td>
                                <td  className=" pl-0 font-bold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-3 mt-5">
                        <button className="btn btn-outline">Read</button>
                        <button className="btn text-white bg-[rgb(80,177,201)] border-[rgb(80,177,201)]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

BookDetails.propTypes = {

}

export default BookDetails
