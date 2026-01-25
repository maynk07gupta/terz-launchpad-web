import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type RoadmapTimelineProps = {
  totalSteps: number;
  activeStep: number;
  onStepClick: (index: number) => void;
  stepTitles?: string[];
};

const RoadmapTimeline = ({
  totalSteps,
  activeStep,
  onStepClick,
  stepTitles = [],
}: RoadmapTimelineProps) => {
  return (
    <div className="w-full py-6">
      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between">
          {/* Progress line background */}
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-muted rounded-full" />
          
          {/* Active progress line */}
          <div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
            style={{
              width: `${(activeStep / (totalSteps - 1)) * 100}%`,
            }}
          />

          {/* Step circles */}
          {Array.from({ length: totalSteps }).map((_, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;

            return (
              <button
                key={index}
                onClick={() => onStepClick(index)}
                className={cn(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isCompleted &&
                    "bg-primary/80 text-primary-foreground hover:bg-primary hover:scale-110",
                  isActive &&
                    "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110 ring-4 ring-primary/20",
                  isUpcoming &&
                    "bg-muted border-2 border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
                )}
                aria-label={`Step ${index + 1}${stepTitles[index] ? `: ${stepTitles[index]}` : ""}`}
              >
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Step labels */}
        {stepTitles.length > 0 && (
          <div className="relative mt-3 flex justify-between">
            {stepTitles.map((title, index) => (
              <div
                key={index}
                className={cn(
                  "w-10 text-center text-xs transition-colors duration-300",
                  index === activeStep
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                <span className="block max-w-[80px] -translate-x-1/4 truncate">
                  {title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative flex flex-col gap-4 pl-6">
          {/* Vertical progress line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-muted" />
          <div
            className="absolute left-[11px] top-0 w-0.5 bg-gradient-to-b from-primary to-primary/70 transition-all duration-500"
            style={{
              height: `${(activeStep / (totalSteps - 1)) * 100}%`,
            }}
          />

          {/* Step items */}
          {Array.from({ length: totalSteps }).map((_, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;

            return (
              <button
                key={index}
                onClick={() => onStepClick(index)}
                className={cn(
                  "relative flex items-center gap-3 text-left transition-all duration-300",
                  "focus:outline-none"
                )}
              >
                <div
                  className={cn(
                    "absolute -left-6 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300",
                    isCompleted &&
                      "bg-primary/80 text-primary-foreground",
                    isActive &&
                      "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110",
                    isUpcoming &&
                      "bg-muted border border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-3.5 w-3.5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                {stepTitles[index] && (
                  <span
                    className={cn(
                      "text-sm transition-colors duration-300",
                      isActive ? "text-primary font-medium" : "text-muted-foreground"
                    )}
                  >
                    {stepTitles[index]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
