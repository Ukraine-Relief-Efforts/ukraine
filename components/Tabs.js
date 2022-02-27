const Tabs = ({ openTab, cause, handleTabChange }) => {
  const tabs = ["Military", "Food", "Humanitarian"];
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {tabs.map((tab) => {
            return (
              <li
                key={tab}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded " +
                    "block leading-normal " +
                    (openTab === cause
                      ? "text-white bg-blue-600"
                      : "text-blue-600 bg-white")
                  }
                  onClick={() => handleTabChange()}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;

