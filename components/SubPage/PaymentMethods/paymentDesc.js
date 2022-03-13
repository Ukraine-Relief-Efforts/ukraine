export default function PaymentDesc (props) {
    const [
        methodName,
        howTo,
        pros,
        cons,
        ukraineService,
        intlService,
        serviceRegion,
        whatsNeeded
    ] = props.payDesc;

    return (
      <div>
        <div>
          {whatsNeeded ? (
            <div className='mt-2 mb-2'>
              <span className="font-bold text-md mb-10">What&#39;s needed: </span>
              <span>{whatsNeeded}</span>
            </div>
          ) : (
            ""
          )}
          <div>
            <div>
              <h5 className="font-bold text-xl mb-2">Pros</h5>
              <div className="block mb-2">
                <ul className="list-disc list-outside">
                  {pros.split(", ").map((pro, index) => (
                    <li key={`pro${index}`} className="ml-4">
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='mb-3'>
              <h5 className="font-bold text-xl mb-2">Cons</h5>
              <ul className="list-disc list-outside">
                {cons.split(", ").map((con, index) => (
                  <li key={`con${index}`} className="ml-4">
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
