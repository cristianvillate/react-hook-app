import { useCounter , useFetch } from "../hooks";
import { LoadingQuote , Quote} from "./";



export const MultipleCustomHooks = () => {

  const {counter,increment} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/1${counter}`);
  // console.log({ data, isLoading, hasError });

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
      
    isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />
      
      /* {
        isLoading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : (
          <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      } */}

    

<button className="btn btn-primary" onClick={() =>increment()} disabled={isLoading}>Next quote</button>


    </>

  )
}
