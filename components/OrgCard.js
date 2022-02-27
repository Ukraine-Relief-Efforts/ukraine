function OrgCard(props) {
  return (
    <div className="m-5 p-5 shadow-lg rounded-lg border border-gray-100">
      {props.values.map((item, index) => {
        return (
          <div key={index} className="col-md-4">
            <div className="mb-4">
              <span>{props.titles[index]}:</span> {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default OrgCard;
