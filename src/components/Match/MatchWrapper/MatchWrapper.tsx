import { ReactNode } from "react";

export interface MatchWrapperProps {
  children: ReactNode;
  win: boolean;
  className?: string;
}

const MatchWrapper = ({ win, children, className }: MatchWrapperProps) => {
  return (
    <div className={`${!win ? "bg-red-900" : "bg-blue-400 "} ` + className + ' p-4 rounded-sm w-4/12'}>
      {children}
    </div>
  );
};

export default MatchWrapper;
