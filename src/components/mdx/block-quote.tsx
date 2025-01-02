export const BlockQuote = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 border-green-400 dark:border-green-800 p-4 py-[2px] border-s-4 ">
      {children}
    </div>
  );
};
