"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ClientsHeader = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "16px",
      }}
    >
      <h1
        style={{ fontSize: 32, fontWeight: 700, color: "#121417", margin: 0 }}
      >
        Clients
      </h1>
      <button
        style={{
          background: "#F2F2F5",
          borderRadius: 12,
          padding: "0 16px",
          height: 32,
          border: "none",
          fontWeight: 500,
          fontSize: 14,
          color: "#121417",
          cursor: "pointer",
        }}
        onClick={() => router.push("/clients/newClient")}
      >
        New Client
      </button>
    </div>
  );
};

export default ClientsHeader;
