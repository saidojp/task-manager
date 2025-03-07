import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import Link from "next/link";
import {
  CalendarIcon,
  Pencil1Icon,
  ArrowLeftIcon,
} from "@radix-ui/react-icons";

const TicketView = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
      <div className="border-b border-border">
        <div className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{ticket.title}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <StatusDisplay status={ticket.status} />
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Category:</span> {ticket.category}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end">
            <Link
              href={`/TicketPage/${ticket.id}`}
              className="inline-flex items-center gap-1 px-4 py-2 bg-dark-red-accent text-white rounded-md hover:bg-dark-red-accent/90 transition-colors"
            >
              <Pencil1Icon className="w-4 h-4" />
              <span>Edit</span>
            </Link>
            <DeleteBlock id={ticket.id} />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap text-foreground/90">
            {ticket.description}
          </div>
        </div>

        {/* Progress */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Progress</h2>
          <div className="max-w-md">
            <ProgressDisplay progress={ticket.progress} />
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t border-border mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4 mr-1.5" />
              <span>Created: {createdDateTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground mr-2">
              Priority:
            </span>
            <PriorityDisplay priority={ticket.priority} />
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="p-6 border-t border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground bg-card hover:bg-card-hover border border-border rounded-md transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to all tickets</span>
        </Link>
      </div>
    </div>
  );
};

export default TicketView;
