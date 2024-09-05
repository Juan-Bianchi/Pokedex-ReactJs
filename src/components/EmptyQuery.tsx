const EmptyQuery = () => {
  return (
    <div className="flex flex-wrap justify-center flex-col items-center">
      <h2 className="title text-amber-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl">
        NO MATCHES TO THE SEARCH... TRY AGAIN!
      </h2>
      <img
        className=" w-[310px] aspect-square"
        src="/search.png"
        alt="searching"
      />
    </div>
  );
};

export default EmptyQuery;
