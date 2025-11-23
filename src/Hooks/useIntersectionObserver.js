// src/Hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook to track which section is currently intersecting the viewport.
 * @param {string[]} sectionIds - Array of section IDs to observe (e.g., ['hero', 'about', 'skills']).
 * @param {string} rootMargin - Defines the area around the viewport for intersection detection (e.g., '-50% 0px -50% 0px').
 * @returns {string} The ID of the currently active (visible) section.
 */
export const useIntersectionObserver = (sectionIds, rootMargin = '0px') => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    // 1. Get all elements based on the IDs provided
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    // 2. Define the Intersection Observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is currently visible in the center of the viewport
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin, // Use the provided margin to define the "active" zone (e.g., the center 50% of the screen)
        threshold: 0, // We only care if the element starts or stops intersecting
      }
    );

    observerRef.current = observer;

    // 3. Start observing each section element
    elements.forEach((el) => observer.observe(el));

    // Cleanup function: stop observing when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]);

  return activeId;
};