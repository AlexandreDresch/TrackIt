import { createContext, useState } from "react";

export const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
  const [doneHabits, setDoneHabits] = useState([]);
  const [percentage, setPercentage] = useState(0);

  return (
    <UserProgressContext.Provider
      value={{
        doneHabits,
        setDoneHabits,
        percentage,
        setPercentage
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}
