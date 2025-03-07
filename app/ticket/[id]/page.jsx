import TicketView from "@/app/(components)/TicketView";

const getTicketById = async (id) => {
  try {
    const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${host}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ticket");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketViewPage = async ({ params }) => {
  const ticketData = await getTicketById(params.id);

  if (!ticketData || !ticketData.foundTicket) {
    return <div className="p-5">Ticket not found</div>;
  }

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <TicketView ticket={ticketData.foundTicket} />
    </div>
  );
};

export default TicketViewPage;
