/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useQueryExample } from '@/app/hooks'
import { useAddData } from '@/app/hooks'

export function PostList() {
  // const [page, setPage] = useState([])
  const [name, setName] = useState("")


  const { data, isLoading, isFetching, refetch } = useQueryExample([])
  const { mutate } = useAddData(name)



  const handleChange = (e) => {
    e.preventDefault();
    mutate({ name })
  }

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <ul>
        {/* <span>Pagina atual: {page + 1}</span> */}

        <li>
          {data?.map(hero => (
            <div key={hero.id}>
              <Image src={hero.url} width={100} height={100} />
              <p> {hero.name}</p>
            </div>
          ))}
        </li>
      </ul>

      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

      {/* <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Pagina anterior
        </button>

        <button
          onClick={() => setPage((old) => (data ? old + 1 : old))}
          disabled={page === 42}
        >
          Pagina seguinte
        </button> */}

      <button
        onClick={handleChange}
      >
        Adicionar personagem
      </button>

      <button
        onClick={refetch}
      >
        Atualizar
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