/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */


"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { usePosts } from '@/app/hooks'

// import { useAddData } from '@/app/hooks/useMutation'

export function PostList() {
  const [page, setPage] = useState(0)
  const [name, setName] = useState("")


  const { data, isLoading, isFetching, } = usePosts(page)

  const createData = (hero) => axios.post('http://localhost:4000/superheroes', { hero })

  const mutation = useMutation({
    mutationFn: createData,

    onSuccess: async () => {
      setName(name)
      console.log("Successfully created")
    },
    onError: async () => {
      console.log("Error creating")
    }
  }
  )
  const errorText = mutation.error ? mutation.error.toString() : null;


  const handleChange = (e) => {
    e.preventDefault();
    mutation.mutate({ name })

  }

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <form onSubmit={handleChange}>
        <ul>
          <span>Pagina atual: {page + 1}</span>
          {data?.results?.map((character) => (
            <li key={character.id}>
              <p>{character.name}</p>
              <Image width={100} height={100} src={character.image} alt='imagem do personagem' />
            </li>
          ))}
        </ul>

        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <h5 onClick={() => mutation.reset()}>{errorText}</h5>

        <button
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
        </button>

        <button
          type='submit'
        >
          Adicionar personagem
        </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
      </form>


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