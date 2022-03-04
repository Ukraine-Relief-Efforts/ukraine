export default function About(props) {
    return (
        <div className='mt-24 mb-14'>
            <div>
                <h1 className="font-extrabold text-1xl md:text-2xl lg:text-4xl">{props.title}</h1>
            </div>
            <div className='my-8 md:my-12 lg:my-20'>
                <p>{props.description}</p>
            </div>
        </div>
    )
}