import react, { useState } from 'react'
const DimensionsContext = react.createContext({})

export function DimensionsContextProvider({ children }) {
	const [areDimensionsEnabled, setDimensionsEnabled] = useState(false)
	return <DimensionsContext.Provider value={{ areDimensionsEnabled, setDimensionsEnabled }}>{children}</DimensionsContext.Provider>
}

export default DimensionsContext
