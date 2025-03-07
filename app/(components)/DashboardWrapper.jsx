"use client";

import { useState } from "react";
import StatusFilter from "./StatusFilter";
import TicketCard from "./TicketCard";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const DashboardWrapper = ({ tickets }) => {
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter tickets by status
  const filteredTickets =
    statusFilter === "all"
      ? tickets
      : tickets.filter((ticket) => ticket.status === statusFilter);

  // Get unique categories from filtered tickets
  const uniqueCategories = [
    ...new Set(filteredTickets?.map(({ category }) => category)),
  ];

  // Handle status filter change
  const handleStatusChange = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tickets Dashboard</h1>
        <Link
          href="/TicketPage/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-dark-red-accent text-white rounded-md hover:bg-dark-red-accent/90 transition-colors"
        >
          <PlusIcon className="w-4 h-4" />
          <span>New Ticket</span>
        </Link>
      </div>

      {/* Status filter */}
      <StatusFilter onStatusChange={handleStatusChange} />

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground">Total Tickets</p>
          <p className="text-2xl font-bold">{tickets.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground">Filtered Tickets</p>
          <p className="text-2xl font-bold">{filteredTickets.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold">
            {tickets.filter((t) => t.status === "done").length}
          </p>
        </div>
      </div>

      {uniqueCategories.length === 0 ? (
        <div className="text-center py-8 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground">
            No tickets match the selected filter
          </p>
        </div>
      ) : (
        uniqueCategories.map((uniqueCategory, categoryIndex) => {
          const categoryTickets = filteredTickets.filter(
            (ticket) => ticket.category === uniqueCategory
          );

          return (
            <div key={categoryIndex} className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold">{uniqueCategory}</h2>
                <div className="ml-3 px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {categoryTickets.length}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryTickets.map((filteredTicket, _index) => (
                  <TicketCard key={_index} ticket={filteredTicket} />
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DashboardWrapper;
