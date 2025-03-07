import { StarFilledIcon } from "@radix-ui/react-icons";

const PriorityDisplay = ({ priority }) => {
  const getColor = (index) => {
    // Return the appropriate color based on priority
    if (priority >= index) {
      switch (priority) {
        case 1:
          return "text-accent-3"; // Low
        case 2:
          return "text-accent-3"; // Low
        case 3:
          return "text-accent-4"; // Medium
        case 4:
          return "text-accent-5"; // High
        case 5:
          return "text-accent-5"; // High
        default:
          return "text-accent-3";
      }
    }
    return "text-muted opacity-25";
  };

  return (
    <div
      className="flex items-center"
      aria-label={`Priority level ${priority}`}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <StarFilledIcon
          key={index}
          className={`w-4 h-4 ${getColor(
            index
          )} transition-colors duration-200`}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
