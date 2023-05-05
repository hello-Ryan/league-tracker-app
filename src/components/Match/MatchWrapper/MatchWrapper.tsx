import { ReactNode } from "react";

export interface MatchWrapperProps {
  children: ReactNode;
  win: boolean;
  className?: string;
}

const MatchWrapper = ({ win, children, className }: MatchWrapperProps) => {
  return (
    <div
      className={
        `${win ? "bg-blue-900" : "bg-rose-900 "} ` +
        className +
        " p-4 rounded-sm w-06"
      }
    >
      {children}
    </div>
  );
};

export default MatchWrapper;
