import React from 'react'
import ExperienceTimeline from '../index';

// src/components/ExperienceTimeline/index.test.js
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

// src/components/ExperienceTimeline/index.test.js
// Mocking nested components if any (assuming there are none in this case)
// Mocking hooks if any (assuming there are none in this case)

describe('ExperienceTimeline() ExperienceTimeline method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    test('renders the timeline section with correct title', () => {
      // This test checks if the timeline section renders with the correct title
      render(<ExperienceTimeline />);
      const titleElement = screen.getByText(/EXPERIENCE & EDUCATION/i);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders all timeline items correctly', () => {
      // This test checks if all timeline items are rendered correctly
      render(<ExperienceTimeline />);
      const timelineItems = screen.getAllByRole('listitem');
      expect(timelineItems.length).toBe(11); // Total points across all items
    });

    test('renders company logos with correct alt text', () => {
      // This test checks if company logos are rendered with the correct alt text
      render(<ExperienceTimeline />);
      const logoElements = screen.getAllByRole('img');
      expect(logoElements[0]).toHaveAttribute('alt', 'H/A Studio | Full-time logo');
      expect(logoElements[1]).toHaveAttribute('alt', 'Self-employed | Entrepreneur logo');
      expect(logoElements[2]).toHaveAttribute('alt', 'Runqian Jiayue Company | Internship logo');
      expect(logoElements[3]).toHaveAttribute('alt', 'Guangzhou Kidolab School logo');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    test('handles empty timeline data gracefully', () => {
      // This test checks if the component handles empty timeline data without crashing
      const originalData = [...timelineData];
      timelineData.length = 0; // Clear the data
      render(<ExperienceTimeline />);
      const timelineContainer = screen.getByRole('region', { name: /timeline/i });
      expect(timelineContainer).toBeEmptyDOMElement();
      timelineData.push(...originalData); // Restore the data
    });

    test('handles missing logo gracefully', () => {
      // This test checks if the component handles missing logo without crashing
      const modifiedData = [...timelineData];
      modifiedData[0].logo = ''; // Remove logo for the first item
      render(<ExperienceTimeline />);
      const logoElements = screen.getAllByRole('img');
      expect(logoElements[0]).toHaveAttribute('alt', 'H/A Studio | Full-time logo');
      expect(logoElements[0]).toHaveAttribute('src', ''); // Check for empty src
    });
  });
});