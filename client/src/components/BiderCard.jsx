import React, { useEffect, useState } from "react";

function BiderCard({ bid }) {
  const [bidUser, setBidUser] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/user/${bid}`)
      .then((res) => res.json())
      .then((data) => {
        setBidUser(data);
      });
  }, [bid]);
  console.log(bidUser);
  return <div>{bidUser && bidUser.name}</div>;
}

export default BiderCard;
