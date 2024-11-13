import React, { createContext, useContext, useReducer } from 'react';

type Status = 'Active' | 'Closed' | 'Under Investigation' | 'Pending';

interface FIR {
  id: string;
  title: string;
  status: Status;
  officer: string;
  officerImage: string;
  description: string;
  date: string;
  location: string;
  complainant: string;
  contact: string;
  linkedCases: string[];
  type: string;
}

interface FIRState {
  cases: FIR[];
}

type FIRAction = 
  | { type: 'ADD_FIR'; payload: FIR }
  | { type: 'UPDATE_STATUS'; payload: { id: string; status: Status } }
  | { type: 'LINK_CASE'; payload: { sourceId: string; targetId: string } };

const initialCases: FIR[] = [
  { 
    id: 'FIR/2024/0101',
    title: 'Vehicle Theft at T.Nagar',
    status: 'Under Investigation',
    officer: 'Inspector Sethupathi Kumar',
    officerImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
    description: 'Red Honda City stolen from T.Nagar parking lot. CCTV footage under review.',
    date: '2024-03-10',
    location: 'T.Nagar',
    complainant: 'Rajesh Kumar',
    contact: '9876543210',
    linkedCases: [],
    type: 'Vehicle Theft'
  },
  // ... other initial cases
];

const FIRContext = createContext<{
  state: FIRState;
  dispatch: React.Dispatch<FIRAction>;
} | undefined>(undefined);

function firReducer(state: FIRState, action: FIRAction): FIRState {
  switch (action.type) {
    case 'ADD_FIR':
      return {
        ...state,
        cases: [...state.cases, action.payload]
      };
    case 'UPDATE_STATUS':
      return {
        ...state,
        cases: state.cases.map(fir =>
          fir.id === action.payload.id
            ? { ...fir, status: action.payload.status }
            : fir
        )
      };
    case 'LINK_CASE':
      return {
        ...state,
        cases: state.cases.map(fir =>
          fir.id === action.payload.sourceId
            ? { ...fir, linkedCases: [...fir.linkedCases, action.payload.targetId] }
            : fir
        )
      };
    default:
      return state;
  }
}

export function FIRProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(firReducer, { cases: initialCases });

  return (
    <FIRContext.Provider value={{ state, dispatch }}>
      {children}
    </FIRContext.Provider>
  );
}

export function useFIR() {
  const context = useContext(FIRContext);
  if (context === undefined) {
    throw new Error('useFIR must be used within a FIRProvider');
  }
  return context;
}