import React from 'react'
import PropTypes from 'prop-types'
import { FaRegStar } from "react-icons/fa";
const Book = ({ book }) => {
    const { publisher, tags, category, rating, totalPages, review, image, author, bookName } = book;
    return (
        <div className="card bg-base-100 border-2 rounded-xl">
            <div className="p-5">
                <div className=" p-20 py-8 bg-[rgb(243,243,243)] rounded-xl flex justify-center items-center">

                    <img className="h-[200px] w-[140px] object-cover rounded-xl"
                        src={image}
                        alt="books" />

                </div>
                <div className="flex flex-wrap gap-3 my-5">
                    {
                        tags.map((tag, idx) =>
                            <button key={idx} className="btn btn-ghost bg-[rgba(35,190,10,0.05)] rounded-full text-[rgb(35,190,10)] text-base">{tag}</button>
                        )
                    }
                </div>
                <h1 className="text-3xl font-bold my-3">{bookName}</h1>
                <p className="text-xl mb-5">By : {author}</p>
                <hr className="border-dashed border-2 mb-5" />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="flex gap-2 justify-center items-center text-lg">
                        <p>Rating: {rating}</p>
                        <FaRegStar/>
                    </div>
                </div>
            </div>

        </div>
    )
}

Book.propTypes = {

}

export default Book
