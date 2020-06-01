import React from 'react'
import { Link } from 'gatsby'
import DefaultLayout from '../layouts/default'
import PageHead from '../components/header/pageHead'


const PageNotFound = () => {
    return (
        <DefaultLayout>
            <PageHead title='Page Not Found' />
            <h1>Page Not Found</h1>
            <p><Link to='/'>Home</Link></p>
        </DefaultLayout>
    )
}

export default PageNotFound
