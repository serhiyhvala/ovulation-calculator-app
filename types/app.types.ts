import {ChangeEvent, ReactNode} from "react";

export interface HeadlineProps {
  primary: string,
  secondary: string
}

export interface InputProps {
  value?: string
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export interface CycleLengthProps {
  onQuickSelection: (value: number) => void;
}

export interface TagProps extends CycleLengthProps {
  value: number;
}

export interface FormState {
  lastPeriod: string | Date | null;
  cycleLength: number | null;
}

export interface OutcomesState {
  fertileWindow: Date[];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
}

export interface Action {
  type: string;
  payload?: any;
}
