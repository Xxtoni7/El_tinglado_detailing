function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-300 px-[clamp(1rem,4vw,2rem)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
