import { createContext, useState } from "react";

export const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
  const [progressData, setProgressData] = useState(0);
  // const [progressLength, setProgressLength] = useState(0);
  // const [percentage, setPercentage] = useState(0);

  return (
    <UserProgressContext.Provider
      value={{
        progressData,
        setProgressData,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}
