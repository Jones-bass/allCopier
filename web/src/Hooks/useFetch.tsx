import { useCallback, useState } from 'react'

interface FetchResponse {
  response: Response
  json: any
}

const useFetch = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const request = useCallback(
    async (url: string, options?: RequestInit): Promise<FetchResponse> => {
      let response: Response
      let json: any
      try {
        setError(null)
        setLoading(true)
        response = await fetch(url, options)
        json = await response.json()
        if (!response.ok) throw new Error(json.message)
      } catch (err) {
        json = null
        setError(err.message)
      } finally {
        setData(json)
        setLoading(false)
        return { response, json }
      }
    },
    [],
  )

  return {
    data,
    loading,
    error,
    request,
  }
}

export default useFetch
