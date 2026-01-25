import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Clock,
  Package,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type StepDetailCardProps = {
  stepNumber: number;
  totalSteps: number;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceName: string;
  serviceLink: string;
  // Placeholder content - can be filled in later
  keyDocuments?: string[];
  typicalTimeline?: string;
  deliverables?: string[];
  tips?: string[];
  onPrevious: () => void;
  onNext: () => void;
};

const StepDetailCard = ({
  stepNumber,
  totalSteps,
  title,
  description,
  icon: Icon,
  serviceName,
  serviceLink,
  keyDocuments,
  typicalTimeline,
  deliverables,
  tips,
  onPrevious,
  onNext,
}: StepDetailCardProps) => {
  const hasDocuments = keyDocuments && keyDocuments.length > 0;
  const hasTimeline = typicalTimeline && typicalTimeline.length > 0;
  const hasDeliverables = deliverables && deliverables.length > 0;
  const hasTips = tips && tips.length > 0;

  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-background to-secondary/20 shadow-lg animate-fade-in">
      <CardContent className="p-6 lg:p-8">
        {/* Service link */}
        <Link
          to={serviceLink}
          className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:underline transition-colors"
        >
          This procedure applies to our {serviceName} Service →
        </Link>

        {/* Step header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
            <Icon className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Step {stepNumber} of {totalSteps}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-1">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Placeholder sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Key Documents */}
          <Card
            className={cn(
              "border-2 transition-all duration-300",
              hasDocuments
                ? "border-border bg-background"
                : "border-dashed border-muted-foreground/30 bg-muted/20"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  Key Documents Required
                </h4>
              </div>
              {hasDocuments ? (
                <ul className="space-y-1">
                  {keyDocuments.map((doc, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {doc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Content to be added
                </p>
              )}
            </CardContent>
          </Card>

          {/* Typical Timeline */}
          <Card
            className={cn(
              "border-2 transition-all duration-300",
              hasTimeline
                ? "border-border bg-background"
                : "border-dashed border-muted-foreground/30 bg-muted/20"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  Typical Timeline
                </h4>
              </div>
              {hasTimeline ? (
                <p className="text-sm text-muted-foreground">{typicalTimeline}</p>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Duration to be added
                </p>
              )}
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card
            className={cn(
              "border-2 transition-all duration-300",
              hasDeliverables
                ? "border-border bg-background"
                : "border-dashed border-muted-foreground/30 bg-muted/20"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Deliverables</h4>
              </div>
              {hasDeliverables ? (
                <ul className="space-y-1">
                  {deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Content to be added
                </p>
              )}
            </CardContent>
          </Card>

          {/* Pro Tips */}
          <Card
            className={cn(
              "border-2 transition-all duration-300",
              hasTips
                ? "border-border bg-background"
                : "border-dashed border-muted-foreground/30 bg-muted/20"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Pro Tips</h4>
              </div>
              {hasTips ? (
                <ul className="space-y-1">
                  {tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Content to be added
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={stepNumber === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Step
          </Button>

          <Button
            onClick={onNext}
            disabled={stepNumber === totalSteps}
            className="gap-2"
          >
            Next Step
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* CTA at bottom */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground mb-3">
            Ready to start your {serviceName} journey?
          </p>
          <Button asChild size="lg" className="shadow-lg shadow-primary/25">
            <Link to="/contact">Get Expert Assistance →</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepDetailCard;
