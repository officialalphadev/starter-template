import Link from 'next/link';

const Card = ({ index, data }) => {
  return (
    <div
      className={` ${
        index % 2 == 0 ? '-rotate-3' : 'rotate-3'
      } md:rounded-3xl rounded-2xl md:w-[400px] w-72 h-fit hover:rotate-0 relative mx-5 bg-white dark:bg-slate-800 transition-300 shadow-lg hover:shadow-brand-500/50 flex flex-col justify-between group overflow-hidden`}
    >
      <div className="px-5 py-3 space-y-3 md:py-5 md:space-y-5">
        <span className="text-sm font-semibold md:text-base group-hover:text-brand-500 text-slate-900 dark:text-slate-200 transition-300 ">
          {data.title}
        </span>
        <p className="text-xs font-light text-slate-900 dark:text-slate-200 transition-300">
          {data.content}
        </p>
      </div>
      <div className="px-5 py-3 md:py-5 group-hover:bg-brand-500 transition-300">
        <Link href="/">
          <span className="text-sm font-semibold underline cursor-pointer underline-offset-1 group-hover:text-white text-brand-500 transition-300">
            Lihat Detail
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
