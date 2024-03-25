/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import {
  createUserDocument,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
interface UserContextType {
  currentUser: any;
  setCurrentUser: (user: any) => void;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(
      (user: SetStateAction<null>) => {
        if (user) {
          createUserDocument(user);
        }
        setCurrentUser(user);
      }
    );

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
