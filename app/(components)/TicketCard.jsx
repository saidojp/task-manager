import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="card group hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px]">
      <div className="p-4 flex flex-col h-full">
        {/* Header with priority and actions */}
        <div className="flex justify-between items-start mb-3">
          <div className="w-36">
            <StatusDisplay status={ticket.status} />
          </div>
          <DeleteBlock id={ticket.id} />
        </div>

        {/* Content - clickable */}
        <Link href={`/ticket/${ticket.id}`} className="flex-1 flex flex-col">
          <h4 className="font-semibold text-lg mb-2 group-hover:text-accent-1 transition-colors">
            {ticket.title}
          </h4>

          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
            {ticket.description}
          </p>

          {/* Footer */}
          <div className="mt-auto space-y-3">
            <ProgressDisplay progress={ticket.progress} />

            <div className="flex justify-between items-center">
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarIcon className="w-3 h-3 mr-1" />
                <span>{createdDateTime}</span>
              </div>
              <PriorityDisplay priority={ticket.priority} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
