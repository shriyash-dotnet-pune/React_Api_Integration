import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'
import BookList from '../components/BookList'

export default function Home() {
    const [isFetching, setIsFetching] = useState(false)
    const [error,setError] = useState('')
    const [list,setList] = useState([])   

    useEffect(() => {
        setIsFetching(true)
        setError('');
        setList([])

        async function fetchData(){
             try{
                const response = await axios.get('http://localhost:5222/api/Products')
                console.log("response : ",response)
                const data = response?.data

                if(Array.isArray(data))
                    setList(data)
                else if(typeof data === "object" && data !== null)
                    setList([data])
            }
            catch(err){
                console.log("error",err)
                const msg = err?.message || 'Failed to load data. Please try again.';
                setError(msg)
            }
            finally{
                setIsFetching(false)
            }
        }

        fetchData()
    }, [])

  return (
    <>
        <div>
            <h1 className="mb-4">Products</h1>

            {isFetching && <Spinner />}

            {!isFetching && error && <ErrorAlert error={error} />}

            {!isFetching && !error && (
                <>
                {list.length === 0 ? (
                    <div className="alert alert-info">No products found.</div>
                ) : (
                    <BookList list={list} />
                )}
                </>
            )}
        </div>
    </>
  )
}
