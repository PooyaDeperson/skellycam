/**
 * Tooltip.tsx
 *
 * Reusable tooltip component with 2 modes:
 * - "warning"
 * - "normal" (hint/default)
 *
 * Features:
 * - Dynamic message text
 * - Optional "Learn more" link
 * - Optional extra positioning class:
 *    pos-right
 *    pos-left
 *    pos-top
 *    pos-bottom
 *
 * Usage:
 *
 * <Tooltip
 *   mode="warning"
 *   text="Your session is about to expire."
 * />
 *
 * <Tooltip
 *   mode="normal"
 *   text="You can invite teammates later."
 *   learnMoreHref="https://example.com/docs"
 * />
 *
 * <Tooltip
 *   mode="warning"
 *   text="Payment method failed."
 *   learnMoreHref="/billing-help"
 *   positionClass="pos-right"
 * />
 */

import React from "react";


type TooltipMode = "warning" | "normal";

interface TooltipProps {
  mode?: TooltipMode;
  text: string;
  learnMoreHref?: string;
  positionClass?: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  mode = "normal",
  text,
  learnMoreHref,
  positionClass = "",
  className = "",
}) => {
  return (
    <div
      className={`
        tooltip-outer-container
        pos-abs
        br-2
        bg-middark
        p-1
        text-center
        tooltip
        tooltip-${mode}
        ${positionClass}
        ${className}
      `}
    >
      <div className="
      inner-tooltip-container
       br-1
    
        p-1
      ">
        <p className="tooltip-text">
          {text.split("\n").map((line, index, array) => (
            <React.Fragment key={index}>
              {line}
              {index < array.length - 1 && <br />}
            </React.Fragment>
          ))}

          {learnMoreHref && (
            <>
              {" "}
              <a
                href={learnMoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip-link"
              >
                Learn more
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Tooltip;