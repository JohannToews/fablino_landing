import { createContext, useContext, useState, ReactNode } from "react";

interface BetaModalContextType {
  open: (source: string) => void;
  close: () => void;
  isOpen: boolean;
  source: string;
}

const BetaModalContext = createContext<BetaModalContextType>({
  open: () => {},
  close: () => {},
  isOpen: false,
  source: "",
});

export const BetaModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");

  const open = (src: string) => {
    setSource(src);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <BetaModalContext.Provider value={{ open, close, isOpen, source }}>
      {children}
    </BetaModalContext.Provider>
  );
};

export const useBetaModal = () => useContext(BetaModalContext);
