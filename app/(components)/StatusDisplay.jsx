import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

const StatusDisplay = ({ status }) => {
  const getStatusInfo = (status) => {
    switch (status.toLowerCase()) {
      case "done":
        return {
          icon: <CheckCircledIcon className="w-4 h-4" />,
          color: "bg-accent-3/10 text-accent-3 border-accent-3/20",
          label: "Done",
        };
      case "started":
        return {
          icon: <StopwatchIcon className="w-4 h-4" />,
          color: "bg-accent-4/10 text-accent-4 border-accent-4/20",
          label: "In Progress",
        };
      case "not started":
        return {
          icon: <CrossCircledIcon className="w-4 h-4" />,
          color: "bg-accent-5/10 text-accent-5 border-accent-5/20",
          label: "Not Started",
        };
      default:
        return {
          icon: <StopwatchIcon className="w-4 h-4" />,
          color: "bg-accent-1/10 text-accent-1 border-accent-1/20",
          label: status,
        };
    }
  };

  const { icon, color, label } = getStatusInfo(status);

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${color} transition-colors duration-200`}
    >
      {icon}
      <span>{label}</span>
    </span>
  );
};

export default StatusDisplay;
