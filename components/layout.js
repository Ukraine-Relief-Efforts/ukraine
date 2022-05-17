import Head from 'next/head';
import Nav from './Nav/nav';

export default function Layout({ children, isIndexPage }) {
    return (
        <div className={`w-100 ${isIndexPage ? "m-0" : "m-6 sm:my-12 sm:mx-16"}`}>
            <Head><title>Help Ukraine Now</title></Head>
            <Nav isIndexPage={isIndexPage} />
            <main>{children}</main>
        </div>
    );
}
