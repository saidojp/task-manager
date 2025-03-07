"use client";

import { useState } from "react";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

const StatusFilter = ({ onStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "not started", label: "Not Started" },
    { value: "started", label: "In Progress" },
    { value: "done", label: "Completed" },
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    onStatusChange(status);
  };

  const getButtonStyle = (status) => {
    const isSelected = selectedStatus === status;
    return isSelected
      ? "bg-dark-red-accent text-white"
      : "bg-card hover:bg-card-hover text-foreground";
  };

  return (
    <div className="mb-6">
      <h2 className="text-sm font-medium text-muted-foreground mb-3">
        Filter by Status
      </h2>
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status.value}
            className={`px-3 py-1.5 rounded-md transition-colors text-sm flex items-center gap-1.5 ${getButtonStyle(
              status.value
            )}`}
            onClick={() => handleStatusChange(status.value)}
          >
            {selectedStatus === status.value && (
              <CheckIcon className="w-3 h-3" />
            )}
            {status.label}
          </button>
        ))}

        {selectedStatus !== "all" && (
          <button
            className="px-3 py-1.5 rounded-md bg-card hover:bg-card-hover text-foreground transition-colors text-sm flex items-center gap-1.5"
            onClick={() => handleStatusChange("all")}
            aria-label="Clear filter"
          >
            <Cross1Icon className="w-3 h-3" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default StatusFilter;
