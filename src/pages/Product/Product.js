import React, { useEffect, useState} from 'react'
import axios from "axios";
import {Helmet} from 'react-helmet'
import { Link, NavLink } from 'react-router-dom';

function Product() {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories").then((response) => {
            setData(response.data.sort((a, b) => a.id - b.id));

        });
    }
    )

    return (
        <main>
            <Helmet>
                <title>Product Page</title>
            </Helmet>

            <NavLink to={"/addpost"}>Add Post</NavLink>
            <div>

                {data.map((x) => (
                    <div>
                        <p>{x.id}</p>
                        <p>{x.description}</p>
                        <h1>{x.name}</h1>
                        <Link to={`/detail/${x.id}`}><button >detail</button></Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Product