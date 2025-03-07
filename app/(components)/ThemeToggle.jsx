"use client";

import { useTheme } from "../context/ThemeContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HalfMoonIcon,
  SunIcon,
  DesktopIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Custom icons for light and dark mode
  const LightModeIcon = () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.5C8 1.77614 7.77614 2 7.5 2C7.22386 2 7 1.77614 7 1.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L3.61091 2.90381C3.80617 3.09907 3.80617 3.41566 3.61091 3.61092C3.41565 3.80618 3.09907 3.80618 2.9038 3.61092L2.1967 2.90381C2.00144 2.70855 2.00144 2.39196 2.1967 2.1967ZM12.8033 2.1967C12.9986 2.39196 12.9986 2.70855 12.8033 2.90381L12.0962 3.61092C11.9009 3.80618 11.5843 3.80618 11.3891 3.61092C11.1938 3.41566 11.1938 3.09907 11.3891 2.90381L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967ZM7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H1.5C1.77614 7 2 7.22386 2 7.5C2 7.77614 1.77614 8 1.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM13 7.5C13 7.22386 13.2239 7 13.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H13.5C13.2239 8 13 7.77614 13 7.5ZM2.9038 11.3891C3.09906 11.5843 3.09906 11.9009 2.9038 12.0962L2.1967 12.8033C2.00144 12.9986 1.68485 12.9986 1.48959 12.8033C1.29433 12.608 1.29433 12.2915 1.48959 12.0962L2.1967 11.3891C2.39196 11.1938 2.70854 11.1938 2.9038 11.3891ZM11.3891 11.3891C11.5843 11.1938 11.9009 11.1938 12.0962 11.3891L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L11.3891 12.0962C11.1938 11.9009 11.1938 11.5843 11.3891 11.3891ZM7.5 13C7.77614 13 8 13.2239 8 13.5V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.5C7 13.2239 7.22386 13 7.5 13Z"
        fill="currentColor"
      />
    </svg>
  );

  const DarkModeIcon = () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90488 9.20322 3.96609 9.20322 5.09998C9.20322 8.50543 6.63536 11.3111 3.32547 11.8388C3.04957 11.8793 2.92927 12.2228 3.15841 12.3888C4.45971 13.2409 6.02034 13.7 7.70646 13.7C11.9429 13.7 15.3999 10.4141 15.3999 6.39998C15.3999 2.76546 12.5506 -0.262484 8.54406 0.98184Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Change theme"
        >
          {theme === "light" ? (
            <LightModeIcon />
          ) : theme === "dark" ? (
            <DarkModeIcon />
          ) : (
            <DesktopIcon className="w-4 h-4" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[180px] bg-card rounded-lg p-1 shadow-lg border border-border"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="flex items-center gap-2 p-2 cursor-pointer rounded-md outline-none focus:bg-card-hover hover:bg-card-hover"
            onClick={() => setTheme("light")}
          >
            <LightModeIcon />
            <span className="text-sm">Light</span>
            {theme === "light" && (
              <CheckIcon className="ml-auto w-3 h-3 text-primary-red" />
            )}
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 p-2 cursor-pointer rounded-md outline-none focus:bg-card-hover hover:bg-card-hover"
            onClick={() => setTheme("dark")}
          >
            <DarkModeIcon />
            <span className="text-sm">Dark</span>
            {theme === "dark" && (
              <CheckIcon className="ml-auto w-3 h-3 text-primary-red" />
            )}
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 p-2 cursor-pointer rounded-md outline-none focus:bg-card-hover hover:bg-card-hover"
            onClick={() => setTheme("system")}
          >
            <DesktopIcon className="w-4 h-4" />
            <span className="text-sm">System</span>
            {theme === "system" && (
              <CheckIcon className="ml-auto w-3 h-3 text-primary-red" />
            )}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default ThemeToggle;
