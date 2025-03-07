import * as Progress from "@radix-ui/react-progress";

const ProgressDisplay = ({ progress }) => {
  const getProgressColor = (progress) => {
    if (progress < 25) return "bg-accent-5";
    if (progress < 50) return "bg-accent-4";
    if (progress < 75) return "bg-accent-1";
    return "bg-accent-3";
  };

  return (
    <div className="flex items-center w-full gap-2">
      <Progress.Root
        className="relative overflow-hidden bg-muted rounded-full w-full h-2"
        value={progress}
      >
        <Progress.Indicator
          className={`h-full transition-all duration-300 ease-in-out ${getProgressColor(
            progress
          )}`}
          style={{ width: `${progress}%` }}
        />
      </Progress.Root>
      <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressDisplay;
