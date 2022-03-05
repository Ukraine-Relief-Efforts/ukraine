import Nav from './Nav/nav';

export default function Layout({ children }) {
    return (
        <div className="w-100 m-6 sm:m-12">
            <Nav />
            <main>{children}</main>
        </div>
    );
}