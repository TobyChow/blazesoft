import type { Metadata } from "next";
import { BookStore } from "./components/bookstore/BookStore";

export default function IndexPage() {
  return <BookStore />;
}

export const metadata: Metadata = {
  title: "Toby's Book Store",
};
