import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import Book from "../Book"
import { BookType } from "api/types"
import { getFinishedList } from "api/books/finishedlist"
import Header from "../Header"

interface ReadingListProp {
  setActive: Dispatch<SetStateAction<string>>
}

const FinishedList = ({ setActive }: ReadingListProp) => {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getFinishedList()
      setBooks(bookList)
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {books && books.length === 0 && (
        <Header setActive={setActive} list_type={"finished"} />
      )}
      {books &&
        books.map((book) => {
          return (
            <div key={book.title}>
              <Book book={book} reading={true} />
            </div>
          )
        })}
    </>
  )
}

export default FinishedList
