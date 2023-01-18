import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

function Detail() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories/${id}`).then((response) => {
      setData(response.data);

    });
  }, [id])

  return (
    <main>
      <Helmet>
        <title>{data.name}</title>
      </Helmet>
      <div>


        <div>
          <p>{data.id}</p>
          <p>{data.description}</p>
          <h1>{data.name}</h1>
          <Link to={"/"}><button>back</button></Link>
        </div>

      </div>
    </main>
  )
}

export default Detail