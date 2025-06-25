import React, { useEffect, useState } from "react";

function BiderCard({ bid }) {
  const [bidUser, setBidUser] = useState(null);

  useEffect(() => {
    fetch(`https://work-nest-server-azure.vercel.app/user/${bid}`)
      .then((res) => res.json())
      .then((data) => {
        setBidUser(data);
      });
  }, [bid]);
  console.log(bidUser);
  return <div>{bidUser && bidUser.name}</div>;
}

export default BiderCard;
