import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
title: "Futuristic AI Dashboard",
description: "Next.js App with Futuristic AI Dashboard UI",
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-[#0D0D0D]">{children}</body>
</html>
);
}