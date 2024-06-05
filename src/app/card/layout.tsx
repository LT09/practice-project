import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 bg-green-500">
      <p>Card layout</p>
      {children}
    </div>
  );
}
