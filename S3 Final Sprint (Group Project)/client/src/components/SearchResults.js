import "./searchresults.css";

export default function SearchResults({ searchResults }) {
  console.log(searchResults[0]);
  return (
    <div className="search-data">
      {searchResults.map((result) => (
        <div className="searchDataCustomerDataName" key={result.customer_id}>
          <ul>
            <li className="searchDataCustomerName">
              <b>
                {result.first_name} {result.last_name} ({result.customer_id})
              </b>
            </li>
            <ul>
              <li className="searchDataCustomerDataItem">
                <b>City:</b> {result.city}
              </li>
              <li className="searchDataCustomerDataItem">
                <b>Country:</b> {result.country}
              </li>
              <li className="searchDataCustomerDataItem">
                <b>Phone:</b> {result.phone_number}
              </li>
              <li className="searchDataCustomerDataItem">
                <b>E-mail:</b> {result.email}
              </li>
              <li className="searchDataCustomerDataItem">
                <b>Account Balance:</b> {result.account_balance}
              </li>
            </ul>
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}
