import React from "react";

const ClientsSearchBar = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      background: "#F2F2F5",
      borderRadius: 12,
      width: "100%",
      height: 48,
      margin: "16px 0",
    }}
  >
    <span style={{ padding: "0 16px", color: "#6B7582", fontSize: 20 }}>
      🔍
    </span>
    <input
      type="text"
      placeholder="Search  clients"
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 16,
        color: "#6B7582",
        width: "100%",
      }}
    />
  </div>
);

export default ClientsSearchBar;
