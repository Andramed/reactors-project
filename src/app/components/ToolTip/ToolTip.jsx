import React, { useState } from 'react';
import { createPopper } from '@popperjs/core';

const TooltipButton = ({ children, descriptions }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  let buttonRef = null;
  let tooltipRef = null;

  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  // Funcție pentru crearea popper-ului
  const createTooltip = () => {
    createPopper(buttonRef, tooltipRef, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  };

  

  return (
    <div className="relative inline-block">
      {React.Children.map(children, (child) => {
       
        if (child.type === 'button') {
          return React.cloneElement(child, {
            ...child.props,
            onClick: (e) => {
              toggleTooltip();
              if (child.props.onClick) {
                child.props.onClick(e);
              }
            },
            ref: (node) => (buttonRef = node),
            onMouseEnter: showTooltip,
            onMouseLeave: hideTooltip,
          });
        } else {
          return child;
        }
      })}
      {isTooltipVisible && (
        <div
          ref={(node) => (tooltipRef = node)}
          className="absolute min-w-max z-10 p-2 inline-block  text-sm font-medium text-black transition-opacity duration-300 bg-slate-200 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
        >
          {descriptions}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default TooltipButton;


