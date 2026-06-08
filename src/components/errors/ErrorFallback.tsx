import React from "react";

interface ErrorFallbackProps {
  error?: Error;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f8f9fa", // light neutral background
        textAlign: "center",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: "4rem",
          color: "#dc3545", // red for error
          marginBottom: "1rem",
        }}
      >
        &#9888; {/* ⚠ warning symbol */}
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#212529" }}>
        Oops! Something went wrong
      </h1>

      {/* Message */}
      <p
        style={{
          fontSize: "1rem",
          marginBottom: "2rem",
          color: "#495057",
          maxWidth: 400,
        }}
      >
        {error?.message ||
          "Our system encountered an unexpected error. Please try again later."}
      </p>

      {/* Reload button */}
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Reload Page
      </button>
    </div>
  );
};
