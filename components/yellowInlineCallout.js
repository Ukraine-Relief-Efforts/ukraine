export default function YellowInlineCallout({ children }) {
    return (
        <span className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>
            {children}
        </span>
    );
}