import react, { useState } from 'react'
const DownloadButtonContext = react.createContext({})

export function DownloadButtonContextProvider({ children }) {
	const [isDownloadButtonEnabled, setDownloadButtonEnabled] = useState(false)
	return <DownloadButtonContext.Provider value={{ isDownloadButtonEnabled, setDownloadButtonEnabled }}>{children}</DownloadButtonContext.Provider>
}

export default DownloadButtonContext
