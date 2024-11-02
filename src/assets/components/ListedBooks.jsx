import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import { getStoredReadList, getStoredWishList } from '../../utils/addToDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from './Book';
const ListedBooks = props => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const books = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const readBookList = books.filter(book => storedReadListInt.includes(book.bookId));
    setReadList(readBookList);

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map(id=>parseInt(id));
    const wishBookList = books.filter(book=>storedWishListInt.includes(book.bookId));
    setWishList(wishBookList)
  }, [])




  return (
    <div className="mt-10 mb-20">
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>

        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              wishList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

ListedBooks.propTypes = {

}

export default ListedBooks
