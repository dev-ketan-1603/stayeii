"use client";

import { useEffect, useState } from "react";

export default function Toast({ message, clearMessage }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!message) {
      setShow(false);
      return undefined;
    }

    setShow(true);
    const hideTimer = setTimeout(() => setShow(false), 2300);
    const clearTimer = setTimeout(() => clearMessage(), 2700);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [message, clearMessage]);

  return (
    <div className={`toast ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}
