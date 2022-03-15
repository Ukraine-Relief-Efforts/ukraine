import Head from 'next/head';
import Nav from './Nav/nav';

export default function Layout({ children }) {
    return (
        <div className="w-100 m-6 sm:my-12 sm:mx-16">
            <Head><title>Help Ukraine Now</title></Head>
            <Nav />
            <main>{children}</main>
        </div>
    );
}
