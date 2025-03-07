"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket.id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Work",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const res = await fetch(`${host}/api/Tickets/${ticket.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const res = await fetch(`${host}/api/Tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  const categories = ["Work", "Study", "Hobby", "Project", "Uncategorized"];

  return (
    <div className="max-w-3xl mx-auto w-full p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {EDITMODE ? "Edit Ticket" : "Create New Ticket"}
        </h1>
        <p className="text-muted-foreground mt-1">
          {EDITMODE
            ? "Update the details of your existing ticket"
            : "Fill in the details to create a new ticket"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} method="post" className="space-y-6">
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
              placeholder="Brief summary of the issue"
              className="mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
              placeholder="Detailed explanation of the issue or task"
              rows={5}
              className="mt-1"
            />
          </div>

          {/* Two column layout for smaller inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                onChange={handleChange}
                value={formData.category}
                className="mt-1"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block font-medium">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                onChange={handleChange}
                value={formData.priority}
                className="mt-1"
              >
                <option value={1}>Low</option>
                <option value={2}>Low Medium</option>
                <option value={3}>Medium</option>
                <option value={4}>Medium High</option>
                <option value={5}>High</option>
              </select>
            </div>

            {/* Progress */}
            <div>
              <label htmlFor="progress" className="block font-medium">
                Progress (%)
              </label>
              <input
                id="progress"
                name="progress"
                type="range"
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.progress}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent-1 mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0%</span>
                <span>{formData.progress}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block font-medium">
                Status
              </label>
              <select
                id="status"
                name="status"
                onChange={handleChange}
                value={formData.status}
                className="mt-1"
              >
                <option value="not started">Not Started</option>
                <option value="started">In Progress</option>
                <option value="done">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-card text-foreground border border-border rounded-md hover:bg-card-hover transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Cancel</span>
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-dark-red-accent text-white rounded-md hover:bg-dark-red-accent/90 transition-colors"
          >
            <CheckIcon className="w-4 h-4" />
            <span>{EDITMODE ? "Update Ticket" : "Create Ticket"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTicketForm;
