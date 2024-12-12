function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-8 relative
      bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent
      after:content-[''] after:block after:w-24 after:h-1 after:mt-2
      after:bg-gradient-to-r after:from-primary after:to-primary-light">
      {children}
    </h2>
  );
}

export default SectionTitle;