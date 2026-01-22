export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-7">
      {children}
    </div>
  );
}
