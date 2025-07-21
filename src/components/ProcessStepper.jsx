// src/components/ProcessStepper.jsx
import React from 'react';

/**
 * A reusable component to display a multi-step process.
 *
 * @param {Object} props - The component props.
 * @param {Array<string>} props.steps - An array of strings, where each string is the title of a step.
 * @param {number} props.currentStepIndex - The 0-based index of the currently active step.
 */
function ProcessStepper({ steps, currentStepIndex }) {
  if (!steps || steps.length === 0) {
    return null; // Don't render if no steps are provided
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex justify-between items-center relative py-8 px-4 sm:px-0">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-border-light)] z-0 mx-auto w-[calc(100%-4rem)] md:w-[calc(100%-8rem)]"></div> {/* Uses CSS variable */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-[var(--color-primary-brown)] z-10 transition-all duration-500 ease-in-out" 
        style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
      ></div>

      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center z-10 w-1/3 text-center">
          {/* Step Indicator (Circle) */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-500 ease-in-out
              ${index < currentStepIndex
                ? 'bg-[var(--color-primary-brown)]' // Completed step: Primary Brown
                : index === currentStepIndex
                  ? 'bg-[var(--color-secondary-gold)] scale-110 shadow-lg' // Current step: Secondary Gold, scaled, shadow
                  : 'bg-[var(--color-border-light)] text-gray-600' // Upcoming step: Light Border, darker text for contrast
              }`}
          >
            {index < currentStepIndex ? (
              <i className="fas fa-check"></i> // Checkmark for completed steps
            ) : (
              index + 1 // Step number
            )}
          </div>
          {/* Step Title */}
          <p
            className={`mt-3 text-sm md:text-base font-semibold transition-colors duration-300
              ${index === currentStepIndex ? 'text-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)] opacity-70'}`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProcessStepper;
