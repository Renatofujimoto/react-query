"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { usePosts } from '@/app/hooks'

export function PostList() {
  const [page, setPage] = useState(0)
  const { data, isLoading, isFetching, } = usePosts(page)

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <ul>
        <span>Pagina atual: {page + 1}</span>
        {data?.results?.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
            <Image width={50} height={50} src={character.image} />
          </li>
        ))}
      </ul>

      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Pagina anterior
      </button>

      <button
        onClick={() => setPage((old) => (data?.info.next ? old + 1 : old))}
        disabled={!data?.info.next}
      >
        Pagina seguinte
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}


      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        p {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}