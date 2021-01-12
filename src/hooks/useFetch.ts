import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([])
  const [isPending, setisPending] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')


  useEffect(() => {
    fetch(url).then(res => {
      if (!res.ok) {
        throw Error('Resourse not found')
      }
      return res.json()
    }).then(data => {
      setData(data)
      setisPending(false)
      setErrorMessage('')
    }).catch(err => {
      setErrorMessage(err.message)
      setisPending(false)
    })
  }, [url])

  return { data, isPending, errorMessage }
}

export default useFetch