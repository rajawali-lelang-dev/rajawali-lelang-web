"use client";

import React, { useState } from "react";

interface FilterConfig {
  placeholder: string;
  filters: {
    label: string;
    name: string;
    options: { value: string; label: string }[];
  }[][];
}

interface AsetLayoutProps {
  title: string;
  description: string;
  filterConfig: FilterConfig;
  children: React.ReactNode;
  onFilterChange?: (filters: Record<string, string>) => void;
  onSearch?: (searchTerm: string) => void;
}

export default function AsetLayout({
  title,
  description,
  filterConfig,
  children,
  onFilterChange,
  onSearch,
}: AsetLayoutProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleFilterChange = (name: string, value: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilters({});
    if (onSearch) onSearch("");
    if (onFilterChange) onFilterChange({});
  };
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-16 pt-20 md:pt-24 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-manrope font-bold text-4xl md:text-5xl text-primary-600 mb-4">
            {title}
          </h1>
          <p className="font-manrope text-neutral-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder={filterConfig.placeholder}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              aria-label="search"
              onClick={handleSearchClick}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Filter Rows */}
          {filterConfig.filters.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-2 md:grid-cols-${row.length} gap-3 ${
                rowIndex < filterConfig.filters.length - 1 ? "mb-4" : "mb-4"
              }`}
            >
              {row.map((filter) => (
                <select
                  key={filter.name}
                  name={filter.name}
                  value={filters[filter.name] || ""}
                  onChange={(e) => handleFilterChange(filter.name, e.target.value)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">{filter.label}</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSearchClick}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M21 21l-4.5-4.5" strokeLinecap="round" />
              </svg>
              Cari
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" strokeLinecap="round" />
                <path d="M21 3v5h-5" strokeLinecap="round" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" strokeLinecap="round" />
                <path d="M3 21v-5h5" strokeLinecap="round" />
              </svg>
              Reset
            </button>
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}