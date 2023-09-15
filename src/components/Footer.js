import Instagram from "./svg/Instagram";

const Footer = () => {
  return (
    <footer className="bg-slate-100 mt-4 w-full fixed bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-700 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            lemoninfilm
          </a>
          . Analogue photography from Barcelona
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/lemoninfilm/" className="mr-4 hover:underline md:mr-6 flex gap-2">
              <Instagram width={20} height={20} />
              @lemoninfilm
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
