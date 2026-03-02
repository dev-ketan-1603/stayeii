import { hostels } from "@/lib/data";
import ListingClient from "./listing-client";

export default function ListingsPage({ searchParams }) {
  return <ListingClient hostels={hostels} searchParams={searchParams} />;
}
