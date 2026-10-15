import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../app/feature/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";


const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

  const dispatch = useDispatch()

  useEffect(function () {

    const getData = async () => {

      if (!query.trim()) return;

      let data

      try {

        dispatch(setError(null))
        dispatch(setLoading(true))

        if (activeTab == 'photos') {
          let response = await fetchPhotos(query) //query means jo data hm pass krte h

          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.urls.full
          }))
        }


        if (activeTab == 'videos') {
          let response = await fetchVideos(query)

          data = response.hits.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user || 'video',
            thumbnail: item.userImageURL,
            src: item.videos.medium.url,
            url: item.videos.medium.url
          }))
        }


        if (activeTab == 'gif') {
          let response = await fetchGIF(query)

          data = response.data.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title,
            thumbnail: item.images.fixed_width_small.url,
            src: item.images.original.url,
             url: item.images.original.url
          }))
        }


        if (data.length === 0) {
          dispatch(setResults([]))
          dispatch(setError(`No ${activeTab} found for "${query}"`))
        } else {
          dispatch(setResults(data))
        }

      } catch (error) {

        console.log(error)

        dispatch(setResults([]))
        dispatch(setError("Something went wrong. Please try again."))

      } finally {

        dispatch(setLoading(false))

      }

    }

    getData()

  }, [query, activeTab])


  return (
    <div className="p-10 overflow-auto">

      {loading && (
        <div className="text-center text-xl">
          Loading...
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-red-400 text-xl">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {results.map((item) => {
            return (
              <div key={item.id}>
                <a href="">
                  <ResultCard item={item} />
                </a>
              </div>
            )
          })}

        </div>
      )}

    </div>
  )
}


export default ResultGrid