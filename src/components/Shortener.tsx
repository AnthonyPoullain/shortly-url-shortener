import { useEffect, useReducer, useState } from 'react';
import ShortenerService from '../services';
import CopyButton from './CopyButton';

/**
 * A reducer function that updates the state of the links array based on the action type and payload.
 *
 * @param state The current state of the links array.
 * @param action An object that contains the action type and payload.
 *
 * @returns The updated state of the links array.
 */
function reducer(state: LinksState, action: LinksAction) {
  switch (action.type) {
    case 'ADD_LINK': {
      const newState = [...state];
      newState.unshift(action.payload);

      // Limit number of links to 5 at a time
      if (!!newState.length && newState.length > 5) newState.pop();
      sessionStorage.setItem('links', JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}

/**
 * A component that allows users to shorten URLs and display a list of previously shortened URLs.
 *
 * @returns {JSX.Element} The JSX Element for the Shortener component.
 */
function Shortener(): JSX.Element {
  const [links, dispatch] = useReducer(
    reducer,
    JSON.parse(sessionStorage.getItem('links') as string) || []
  );
  const [link, setLink] = useState('');
  const [clicked, setClicked] = useState(false);
  const [isShortening, setIsShortening] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link) return;
    setIsShortening(true);
    try {
      const shortened = await ShortenerService.shorten(link);
      dispatch({ type: 'ADD_LINK', payload: { link, shortened } });
      setIsShortening(false);
      setLink('');
    } catch (error) {
      setIsShortening(false);
    }
  };

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const shortenedUrl = (e.target as HTMLInputElement)
      ?.closest('div')
      ?.querySelector('p')?.innerText;
    if (!shortenedUrl) return;
    navigator.clipboard.writeText(shortenedUrl);
  };

  useEffect(() => {
    if (clicked && !link) {
      setClicked(false);
    }
  }, [link]);

  return (
    <section className="max-w-screen-full bg-gray-200 ">
      <div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px] mt-[70px]">
        <div className="h-full bg-primary-violet bg-shorten-mobile sm:bg-shorten-desktop bg-bottom bg-cover w-full p-5 sm:p-12 rounded-md mb-2 relative ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-8 sm:gap-5 justify-center"
          >
            <input
              type="text"
              name="link"
              value={link}
              className={`min-h-full h-[44px] text-neutral-dark-violet w-full bg-white rounded-md text-xs sm:text-sm font-medium p-3 sm:p-5 ${
                clicked && !link ? 'input--error' : ''
              }`}
              onChange={(e) => setLink(e.currentTarget.value)}
              placeholder="Shorten a link here..."
            />
            <button
              type="submit"
              className="text-sm w-full sm:w-44 text-white font-bold bg-primary-cyan py-3 px-9 rounded-md whitespace-nowrap"
              onClick={() => setClicked(true)}
              disabled={isShortening}
            >
              {isShortening ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-full h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                'Shorten it!'
              )}
            </button>
          </form>
          {clicked && !link ? (
            <span className="block text-xs mt-2 italic text-medium text-secondary absolute bottom-[4.75rem] sm:bottom-6 ">
              Please add a link
            </span>
          ) : null}
        </div>
      </div>
      <div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px]">
        {links.map((item: Link) => (
          <div
            key={crypto.randomUUID()}
            className="text-sm text-neutral-dark-violet bg-white py-5 sm:py-3 flex flex-col sm:flex-row  sm:items-center justify-between gap-y-3 mt-3 rounded-md px-5 overflow-x-hidden"
          >
            <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
              {item.link}
            </p>
            <div className="sm:hidden w-[200%] translate-x-[-10%] origin-center h-[.05rem] opacity-10 bg-black my-0.5" />
            <div className="flex sm:flex-row flex-col sm:items-center gap-4 overflow-y-visible">
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-primary-cyan">
                {item.shortened}
              </p>
              <CopyButton onClick={handleCopy} delay={5} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shortener;
