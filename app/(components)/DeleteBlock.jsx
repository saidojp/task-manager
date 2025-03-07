"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${host}/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="text-accent-5 hover:text-accent-5/80 rounded-md p-1 hover:bg-accent-5/10 transition-colors"
          aria-label="Delete ticket"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-card p-6 rounded-xl shadow-lg border border-border max-w-md w-[90vw]">
          <Dialog.Title className="font-semibold text-xl mb-2">
            Delete Ticket
          </Dialog.Title>
          <Dialog.Description className="text-muted-foreground mb-4">
            Are you sure you want to delete this ticket? This action cannot be
            undone.
          </Dialog.Description>

          <div className="flex justify-end gap-3 mt-6">
            <Dialog.Close asChild>
              <button className="btn-secondary">Cancel</button>
            </Dialog.Close>
            <button
              className="bg-accent-5 hover:bg-accent-5/90 text-white px-4 py-2 rounded-md transition-colors"
              onClick={deleteTicket}
            >
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteBlock;
