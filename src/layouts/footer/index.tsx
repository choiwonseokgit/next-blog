const Footer = () => {
  return (
    <footer className="mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div>
        © {new Date().getFullYear()}.{" "}
        <span className="font-semibold">WonSeok Choi</span> all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
