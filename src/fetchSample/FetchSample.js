import React, { useEffect, useState } from 'react'

function FetchSample() {

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        // fetch (post işleminde kullanılıyor)
        fetch('https://northwind.vercel.app/api/suppliers')
        .then(res => res.json())
        .then((data) => {
            setSuppliers(data);
        })

    }, [])
    
  return (
    <>
        <h2> Company Name</h2>
        <ul>
            {
                suppliers && suppliers.map((item, key) => {
                    return <li key={key}>{item.companyName}</li>
                })
            }
        </ul>
    </>
  )
}

export default FetchSample