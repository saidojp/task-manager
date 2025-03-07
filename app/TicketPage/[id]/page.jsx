import EditTicketForm from "@/app/(components)/EditTicketForm";

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
    return null;
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    if (!updateTicketData || !updateTicketData.foundTicket) {
      return <div className="p-5">Ticket not found</div>;
    }
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
