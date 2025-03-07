import React from "react";
import DashboardWrapper from "./(components)/DashboardWrapper";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const getTickets = async () => {
  try {
    const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${host}/api/Tickets`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tickets: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <EmptyState />
      </div>
    );
  }

  return <DashboardWrapper tickets={data.tickets} />;
};

// Empty state when no tickets are available
const EmptyState = () => (
  <div className="text-center py-12">
    <div className="bg-card rounded-xl p-8 max-w-md mx-auto shadow-card border border-border">
      <h2 className="text-xl font-semibold mb-3">No tickets found</h2>
      <p className="text-muted-foreground mb-6">
        Get started by creating your first ticket.
      </p>
      <Link
        href="/TicketPage/new"
        className="inline-flex items-center gap-1.5 px-4 py-2 bg-dark-red-accent text-white rounded-md hover:bg-dark-red-accent/90 transition-colors"
      >
        <PlusIcon className="w-4 h-4" />
        <span>Create Ticket</span>
      </Link>
    </div>
  </div>
);

export default Dashboard;
