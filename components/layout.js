import Nav from './Nav/nav';

export default function Layout({ children }) {
    return (
        <div className="w-full m-6 sm:m-12">
            <Nav />
            <main>{children}</main>
        </div>
    );
}