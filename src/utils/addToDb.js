const getStoredReadList = () => {
    const storedReadListStr = localStorage.getItem('read-list');
    if (storedReadListStr) {
        // string to js array
        const storedReadList = JSON.parse(storedReadListStr);
        return storedReadList;
    }
    else {
        return [];
    }
}

const setStoredReadList = (bookId) => {
    const storedReadList = getStoredReadList();
    if (storedReadList.includes(bookId)) {
        console.log("book already exists");
    } else {
        storedReadList.push(bookId)
        // js array to string
        const storedReadListStr = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedReadListStr)
    }
}

const getStoredWishList = () => {
    const storedWishlistStr = localStorage.getItem('wishlist');
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    } else {
        return [];
    }
}

const setStoredWishList = (bookId) => {
    const storedWishlist = getStoredWishList();
    if (storedWishlist.includes(bookId)) {
        console.log("book already in wishlist");
    }
    else {
        storedWishlist.push(bookId);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr);
    }


}

export { setStoredReadList,setStoredWishList,getStoredWishList,getStoredReadList };